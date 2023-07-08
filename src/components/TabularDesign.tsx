import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import YouTube from "react-youtube";
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
type TabularDesignProps = {
  setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>;
};
const TabularDesign: React.FC<TabularDesignProps> = ({
  setLoadingProblems,
}) => {
  const [youtubePlayer, setYoutubePlayer] = useState({
    isOpen: false,
    videoId: "",
  });
  const closeModal = () => {
    setYoutubePlayer({ isOpen: false, videoId: "" });
  };

  const problems = useGetProblems(setLoadingProblems);
  const solvedProblems = useGetSolvedProblems();
  console.log("solvedProblems", solvedProblems);
  console.log("Total Problem", problems);

  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 9;
  const pageCount = Math.ceil(problems.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentPageData = problems.slice(offset, offset + itemsPerPage);

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
      <div>
        <table className="min-w-full divide-y divide-lightBrown mt-8 bg-black">
          <thead className="">
            <tr>
              <th
                scope="col"
                className="px-2 py-3 text-left text-base font-medium text-textGray tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-base font-medium text-textGray tracking-wider"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-base font-medium text-textGray tracking-wider"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-2 py-3 text-left text-base font-medium text-textGray tracking-wider"
              >
                Difficulty
              </th>
              <th
                scope="col"
                className="px-2 py-3 text-left text-base font-medium text-textGray tracking-wider"
              >
                Solution
              </th>
            </tr>
          </thead>
          <tbody className="odd:bg-boxBrown divide-y divide-darkLayer">
            {currentPageData.map((item) => {
              const difficultColor =
                item.difficulty === "Easy"
                  ? "text-darkGreen"
                  : item.difficulty === "Medium"
                  ? "text-darkYellow"
                  : "text-textRed";

              return (
                <tr key={item.id} className="even:bg-darkLayer">
                  <td className="px-2 py-4 whitespace-nowrap text-base font-medium text-textGray">
                    {solvedProblems.includes(item.id) && (
                      <TaskAltIcon color="success" />
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-textGray cursor-pointer hover:text-textBlue">
                    <Link href={`/problems/${item.id}`}>{item.title}</Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-textGray">
                    {item.category}
                  </td>
                  <td
                    className={`px-2 py-4 whitespace-nowrap text-base font-medium ${difficultColor}`}
                  >
                    {item.difficulty}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-base font-medium text-textGray">
                    {item.videoId ? (
                      <VideoLibraryIcon
                        color="warning"
                        onClick={() =>
                          setYoutubePlayer({
                            isOpen: true,
                            videoId: item.videoId as string,
                          })
                        }
                      />
                    ) : (
                      <p>Coming Soon</p>
                    )}
                    {}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
      </div>
      {youtubePlayer.isOpen && (
        <tfoot className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center z-50">
          <div
            className="bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute"
            onClick={closeModal}
          ></div>
          <div className="w-full z-50 h-full px-6 relative max-w-4xl">
            <div className="w-full h-full flex items-center justify-center relative">
              <div className="w-full relative">
                <CloseIcon
                  fontSize="large"
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
    </>
  );
};
export default TabularDesign;

function useGetProblems(
  setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>
) {
  const [problems, setProblems] = useState<DBProblem[]>([]);

  useEffect(() => {
    const getProblems = async () => {
      // fetching data logic
      setLoadingProblems(true);
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
      setLoadingProblems(false);
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
