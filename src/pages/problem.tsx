import { Header } from "@/components/Header";
import React from "react";
import { Roboto } from "next/font/google";
import { Course } from "@/components/Course";
import Tags from "@/components/Tags";
import SearchBox from "@/components/SearchBox";

interface Props {}
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function problem(props: Props) {
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
  return (
    <main className={`flex min-h-screen flex-col ${roboto.className}`}>
      <div className="left-0 top-0 flex w-full  bg-mildBrown pt-3 pb-3 lg:static lg:w-auto lg:p-3">
        {/* NavBar */}
        <Header />
      </div>
      <div className="lg:flex">
        <div className="lg:w-3/4">
          <div className="mt-10 mx-5">
            <div className="flex items-center justify-between max-w-5xl mx-auto">
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
                <SearchBox/>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/4 bg-boxBrown min-h-screen"></div>
      </div>
    </main>
  );
}
