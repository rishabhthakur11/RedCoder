import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import YouTube from "react-youtube";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { auth, firestore } from "@/firebase/firebase";
import { DBProblem } from "@/utilities/types/problem";
import { useAuthState } from "react-firebase-hooks/auth";
import ReactPaginate from "react-paginate";

type FavouriteProblemsTableProps = {
  setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>;
};

const FavouriteProblemsTable: React.FC<FavouriteProblemsTableProps> = ({
  setLoadingProblems,
}) => {
  const [youtubePlayer, setYoutubePlayer] = useState({
    isOpen: false,
    videoId: "",
  });
  const problems = useGetProblems(setLoadingProblems);
  const solvedProblems = useGetSolvedProblems();
  const starredProblems = useGetStarredProblems();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;
  const pageCount = Math.ceil(starredProblems.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentPageData = starredProblems.slice(offset, offset + itemsPerPage);
  const closeModal = () => {
    setYoutubePlayer({ isOpen: false, videoId: "" });
  };

  const handlePageClick = (problems: any) => {
    setCurrentPage(problems.selected);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <tbody className="text-white">
        {problems.map((prob, idx) => {
          const difficulyColor =
            prob.difficulty === "Easy"
              ? "text-dark-green-s"
              : prob.difficulty === "Medium"
              ? "text-dark-yellow"
              : "text-dark-pink";
          if (!starredProblems.includes(prob.id)) return;
          else
            return (
              <tr
                className={`${idx % 2 == 1 ? "bg-dark-layer-1" : ""}`}
                key={prob.id}
              >
                <th className="px-2 py-4 font-medium whitespace-nowrap text-dark-green-s">
                  {solvedProblems.includes(prob.id) && (
                    <BsCheckCircle fontSize={"18"} width="18" />
                  )}
                </th>
                <td className="px-6 py-4">
                  {prob.link ? (
                    <Link
                      href={prob.link}
                      className="hover:text-blue-600 cursor-pointer"
                      target="_blank"
                    >
                      {prob.title}
                    </Link>
                  ) : (
                    <Link
                      className="hover:text-blue-600 cursor-pointer"
                      href={`/problems/${prob.id}`}
                    >
                      {prob.title}
                    </Link>
                  )}
                </td>
                <td className={`px-6 py-4 ${difficulyColor}`}>
                  {prob.difficulty}
                </td>
                <td className={"px-6 py-4"}>{prob.category}</td>
                <td className={"px-6 py-4"}>
                  {prob.videoId ? (
                    <AiFillYoutube
                      fontSize={"28"}
                      className="cursor-pointer hover:text-red-600"
                      onClick={() =>
                        setYoutubePlayer({
                          isOpen: true,
                          videoId: prob.videoId as string,
                        })
                      }
                    />
                  ) : (
                    <p className="text-gray-400">Coming soon</p>
                  )}
                </td>
              </tr>
            );
        })}
      </tbody>
      {youtubePlayer.isOpen && (
        <tfoot className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center">
          <div
            className="bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute"
            onClick={closeModal}
          ></div>
          <div className="w-full z-50 h-full px-6 relative max-w-4xl">
            <div className="w-full h-full flex items-center justify-center relative">
              <div className="w-full relative">
                <IoClose
                  fontSize={"35"}
                  className="cursor-pointer absolute -top-16 right-0"
                  onClick={closeModal}
                />
                <YouTube
                  videoId={youtubePlayer.videoId}
                  loading="lazy"
                  iframeClassName="w-full min-h-[500px]"
                />
              </div>
            </div>
          </div>
        </tfoot>
      )}
      {!(pageCount === 1) && (
        <div className="flex justify-end">
          <ReactPaginate
            className="flex gap-4 w-min mt-28 text-base p-3 "
            previousLabel={<ArrowBackIosNewRoundedIcon fontSize="small" />}
            nextLabel={<ArrowForwardIosRoundedIcon fontSize="small" />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={6}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            pageClassName={`rounded-full flex items-center justify-center w-8 h-8`}
            activeClassName="bg-textRed rounded-full flex items-center justify-center w-8 h-8"
          />
        </div>
      )}
    </>
  );
};
export default FavouriteProblemsTable;

function useGetProblems(
  setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>
) {
  const [problems, setProblems] = useState<DBProblem[]>([]);

  useEffect(() => {
    const getProblems = async () => {
      // fetching data logic
      setLoadingProblems(true)
      const q = query(
        collection(firestore, "problems"),
        orderBy("order", "asc")
      );
      const querySnapshot = await getDocs(q);
      const tmp: DBProblem[] = [];
      querySnapshot.forEach((doc) => {
        tmp.push({ id: doc.id, ...doc.data() } as DBProblem);
      });
      setProblems(tmp);
      setLoadingProblems(false)
    };

    getProblems();
  }, [setLoadingProblems]);
  return problems;
}

function useGetSolvedProblems() {
  const [solvedProblems, setSolvedProblems] = useState<string[]>([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const getSolvedProblems = async () => {
      const userRef = doc(firestore, "users", user!.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        setSolvedProblems(userDoc.data().solvedProblems);
      }
    };

    if (user) getSolvedProblems();
    if (!user) setSolvedProblems([]);
  }, [user]);

  return solvedProblems;
}
function useGetStarredProblems() {
  const [starredProblems, setStarredProblems] = useState<string[]>([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const getStarredProblems = async () => {
      const userRef = doc(firestore, "users", user!.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        setStarredProblems(userDoc.data().starredProblems);
      }
    };

    if (user) getStarredProblems();
    if (!user) setStarredProblems([]);
  }, [user]);

  return starredProblems;
}
