import Image from "next/image";
import React from "react";
import heroImage from "@/Assets/Course/assets/heroSection/heroImage.png";
import FeatureComponent from "./FeatureComponent";
import homeImage from "@/Assets/Course/assets/heroSection/heroImage.png";
import folderImage from "@/Assets/Course/assets/heroSection/Folder.png";

interface Props {
  title: string;
  subtitle: string;
}

const FeatureStyle1 = ({ title, subtitle }: Props) => {
  return (
    <div className="md:pl-10 xl:pl-20">
      <div className="container">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-xl lg:text-3xl font-bold lg:text-left mb-2 md:w-[437px]">
            {title}
          </h1>
          <p className="mb-8 text-sm xl:text-base font-normal text-center lg:text-start">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center">
        <div className="md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0">
          <FeatureComponent logo={homeImage} />
          <div className="lg:ml-10">
            <FeatureComponent logo={folderImage} />
          </div>
        </div>
        <div className="w-5/6 md:w-1/2  xl:max-w-xl">
          <Image
            object-fit="cover"
            alt="lawinzo"
            src={heroImage}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureStyle1;
