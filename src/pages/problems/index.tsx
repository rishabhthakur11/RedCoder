import { Roboto } from "next/font/google";
import { Header } from "@/components/Header";
import React, { useState } from "react";
import { Course } from "@/components/Course";
import Tags from "@/components/Tags";
import SearchBox from "@/components/SearchBox";
import TabularDesign from "@/components/TabularDesign";
import { Calender } from "@/components/Calender";
import { Progress } from "@/components/Progress";
import Footer from "@/components/Footer";
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const Problem = () => {
  const Topics = [
    "Array",
    "LinkedList",
    "Stack",
    "Queue",
    "Binary Tree",
    "Graph",
    "Dynamic Programming",
  ];
  const Difficulty = ["Easy", "Medium", "Hard"];
  const Status = ["To-do", "Solved", "Attempted"];
  const [loadingProblems, setLoadingProblems] = useState(true);

  return (
    <div className={`flex flex-col ${roboto.className} mb-10 h-screen`}>
      <div className="left-0 top-0 bg-mildBrown pt-3 pb-3 lg:p-3">
        {/* NavBar */}
        <Header problemPage={false} />
      </div>
      <div className="lg:flex max-w-7xl mx-auto">
        <div className="lg:w-3/4">
          <div className="mt-10 mx-5">
            <div className="flex items-center justify-between ">
              <h1 className="text-base font-bold text-textGray lg:text-2xl">
                Study Plan
              </h1>
              <p className="text-sm text-textRed lg:text-base">See all</p>
            </div>
            {/* Boxes grid */}
            <div className="max-w-5xl mx-auto pb-5 border-b border-textGray">
              <Course />
            </div>
            {/* Tags and search Box */}
            <div className="max-w-5xl mx-auto">
              <div className="flex gap-3 flex-wrap">
                <Tags tagTitle="Topics" toggleMenu={Topics} />
                <Tags tagTitle="Difficulty" toggleMenu={Difficulty} />
                <Tags tagTitle="Status" toggleMenu={Status} />
                <Tags tagTitle="Tags" toggleMenu={Difficulty} />
                <SearchBox />
              </div>
            </div>
            {/* tabular Design  */}
            <div className="max-w-5xl mx-auto">
              {loadingProblems && (
                <div className="max-w-[1200px] mx-auto  w-full animate-pulse">
                  {[...Array(10)].map((_, idx) => (
                    <LoadingSkeleton key={idx} />
                  ))}
                </div>
              )}
              <TabularDesign setLoadingProblems={setLoadingProblems} />
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/4  min-h-screen">
          <Calender />
          <Progress />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Problem;

const LoadingSkeleton = () => {
  return (
    <div className="flex items-center space-x-12 mt-4 px-6">
      <div className="w-6 h-6 shrink-0 rounded-full bg-dark2"></div>
      <div className="h-4 sm:w-52  w-32  rounded-full bg-dark2"></div>
      <div className="h-4 sm:w-52  w-32 rounded-full bg-dark2"></div>
      <div className="h-4 sm:w-52 w-32 rounded-full bg-dark2"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
