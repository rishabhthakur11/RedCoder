import Image from "next/image";
import React from "react";
import { OperationPointers } from "./OperationPointers";
import homeImage from "@/Assets/Course/assets/heroSection/Home.png";
import folderImage from "@/Assets/Course/assets/heroSection/Folder.png";
import picture from "@/Assets/Course/assets/heroSection/Picture.png";
interface Props {}

export const OperationSection = () => {
  return (
    <div className="flex justify-center py-16 bg-[#F5F8FF]">
      {/* Change the mt */}
      <div className="flex flex-col  items-center max-w-7xl mx-auto text-black">
        <div className="flex flex-col justify-center px-2 md:px-6 xl:px-0">
          <h1 className="mb-3 text-3xl xl:text-5xl font-bold text-center">
            The methodology behind our operations
          </h1>
          <p className="mb-8 text-sm lg:text-base font-regular text-center">
            Welcome aboard! Let's make the most of your journey with intuitive
            navigation, tailored recommendations, and endless possibilities.
          </p>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap  mt-5 xl:mt-20 md:justify-around items-center w-11/12 xl:w-full">
          <OperationPointers
            title="Start Exploring"
            value={1}
            description="Explore is a well-organized tool that helps you get the most out of Redcoder."
            logo={homeImage}
            colorFrom="orange"
          />
          <OperationPointers
            title="Companies & Candidates"
            value={2}
            description="Not only does LeetCode prepare candidates for technical interviews, we also help companies identify top technical talent."
            logo={folderImage}
            colorFrom="blue"
          />
          <OperationPointers
            title="Developer"
            value={3}
            description=" At our core, Redcoder is about developers. Our powerful development tools such as Playground."
            logo={picture}
            colorFrom="violet"
          />
        </div>
      </div>
    </div>
  );
};
