import Image from "next/image";
import React from "react";
import heroImage from "@/Assets/Course/assets/heroSection/heroImage.png";
import FeatureComponent from "./FeatureComponent";
import homeImage from "@/Assets/Course/assets/heroSection/Home.png";
import folderImage from "@/Assets/Course/assets/heroSection/Folder.png";

interface Props {
  title: string;
  subtitle: string;
}

const FeatureStyle2 = ({ title, subtitle }: Props) => {
  return (
    <div className="flex flex-col items-center lg:items-end mb-8">
      <div className="flex flex-col items-center lg:items-end mb-8 lg:w-[390px]">
        <div className="flex flex-col items-center text-center lg:text-left lg:items-end justify-center">
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
          <FeatureComponent logo={homeImage} />
          <div className="lg:mr-10">
            <FeatureComponent logo={folderImage} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FeatureStyle2;
