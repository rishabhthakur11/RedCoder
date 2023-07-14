import React, { useEffect, useState } from "react";
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
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface ProgressProps {}

export const Progress = () => {
  const [loadingProblems, setLoadingProblems] = useState(true);
  const problems = useGetProblems(setLoadingProblems);
  const solvedProblems = useGetSolvedProblems();
  console.log(solvedProblems);
  const [progress, setProgress] = useState(360);
  const styles = {
    wrapper: "relative w-24 h-24 ",
    circle: "absolute top-0 right-0 w-full h-full rounded-circle",
    progress: `absolute top-0 right-0 w-full h-full rounded-full border-4
                transform -rotate-90 ${
                  progress > 1 ? "border-textBlue" : "border-textRed"
                }`,
    label:
      "flex items-center justify-center w-full h-full text-xl font-bold text-textRed",
  };
  const easyProblem = () => {
    let easyProblemNumber = 0;
    solvedProblems.forEach((problem) => {
      if (problems.find((item) => item.id == problem)?.difficulty === "Easy") {
        easyProblemNumber += 1;
      }
    });
    return easyProblemNumber;
  };
  const mediumProblem = () => {
    let mediumProblemNumber = 0;
    solvedProblems.forEach((problem) => {
      if (
        problems.find((item) => item.id == problem)?.difficulty === "Medium"
      ) {
        mediumProblemNumber += 1;
      }
    });
    return mediumProblemNumber;
  };
  const hardProblem = () => {
    let hardProblemNumber = 0;
    solvedProblems.forEach((problem) => {
      if (problems.find((item) => item.id == problem)?.difficulty === "Hard") {
        hardProblemNumber += 1;
      }
    });
    return hardProblemNumber;
  };
  return (
    <div className="flex items-center justify-center py-8 px-1 rounded">
      <div className="max-w-sm w-full shadow-lg">
        <div className="md:p-3 p-5 bg-darkLayer rounded-t">
          <div className="px-4 flex items-center justify-between mb-6">
            <span className="focus:outline-none  text-base font-bold text-textRed">
              Session
            </span>
          </div>
          <div className="flex gap-8 items-center">
            <div className={styles.wrapper}>
              <div className={styles.circle}>
                <div
                  className={styles.progress}
                  style={{
                    transform: `rotate(${
                      (solvedProblems?.length / 100) * 360
                    }deg)`,
                  }}
                ></div>
              </div>
              <div className={styles.label}>
                {solvedProblems?.length}/{problems?.length}
              </div>
            </div>
            <div className="flex flex-col gap-y-2 text-base font-medium text-textGray">
              <div className="flex text-darkGreen">
                <h1>Easy</h1>
              </div>
              <div className="flex text-darkYellow">
                <h1>Medium</h1>
              </div>
              <div className="flex text-textRed">
                <h1>Hard</h1>
              </div>
            </div>
            <div className="flex flex-col gap-y-2 text-base font-medium text-textGray">
              <div className="flex">
                <p>
                  {loadingProblems && (
                    <AiOutlineLoading3Quarters className="animate-spin" />
                  )}
                  {!loadingProblems && easyProblem()}
                </p>
              </div>
              <div className="flex">
                <p>
                  {loadingProblems && (
                    <AiOutlineLoading3Quarters className="animate-spin" />
                  )}
                  {!loadingProblems && mediumProblem()}
                </p>
              </div>
              <div className="flex">
                <p>
                  {loadingProblems && (
                    <AiOutlineLoading3Quarters className="animate-spin" />
                  )}
                  {!loadingProblems && hardProblem()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
      // top question query kai liye
      const s = query(
        collection(firestore, "topproblems"),
        orderBy("order", "asc")
      );
      const querySnapshot = await getDocs(q);
      const querySnapshottop = await getDocs(s);
      const tmp: DBProblem[] = [];
      querySnapshot.forEach((doc) => {
        tmp.push({ id: doc.id, ...doc.data() } as DBProblem);
      });
      querySnapshottop.forEach((doc) => {
        tmp.push({ id: doc.id, ...doc.data() } as DBProblem);
      });
      // Ab total sari problem show hongiii
      setProblems(tmp);
      setLoadingProblems(false);
    };

    getProblems();
  }, [setLoadingProblems]);
  return problems;
}
