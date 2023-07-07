import Image from "next/image";
import React from "react";
import heroImage from "@/Assets/Course/heroImage.png";
import FeatureComponent from "./FeatureComponent";
import homeImage from "@/Assets/Course/assets/heroSection/Home.png";
import folderImage from "@/Assets/Course/assets/heroSection/Folder.png";
import picture from "@/Assets/Course/assets/heroSection/Picture.png";

interface Props {
  title: string;
  subtitle: string;
}

const FeatureStyle2 = ({ title, subtitle }: Props) => {
  return (
    <div className="flex flex-col items-center lg:items-end mb-8 bg-white rounded-md p-5 shadow-lg shadow-textBlue/50">
      <div className="flex flex-col items-center lg:items-end mb-8 lg:w-[390px]">
        <div className="flex flex-col items-center text-center lg:text-left lg:items-end justify-center text-black">
          <h1 className="font-bold text-xl lg:text-3xl mb-2">{title}</h1>
          <p className="w-full text-sm xl:text-base font-normal text-center lg:text-start">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="container flex md:flex-row flex-col items-center">
        <div className="w-5/6 md:w-1/2  xl:max-w-xl">
          <Image object-fit="cover" alt="lawinzo" src={heroImage} priority />
        </div>

        <div className="md:w-1/2 flex flex-col md:items-end md:text-left mt-16 lg:mt-0">
          <FeatureComponent
            logo={homeImage}
            heading="Session Management"
            description="Track the number of question and its Category"
          />
          <div className="lg:mr-10">
            <FeatureComponent
              logo={folderImage}
              heading="Interactive Interface"
              description="Best UI experience to help you mangage your coding"
            />
          </div>
          <FeatureComponent
            logo={picture}
            heading="Make Streak on Redcoder"
            description="Get amazing offers, and showoff your profle"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureStyle2;
