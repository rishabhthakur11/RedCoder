import Image from "next/image";
import React from "react";
import heroImage from "@/Assets/Course/problem.png";
import FeatureComponent from "./FeatureComponent";
import coding from "@/Assets/Course/coding.png";
import developer from "@/Assets/Course/developer.png";
import company from "@/Assets/Course/company.png";

interface Props {
  title: string;
  subtitle: string;
}

const FeatureStyle1 = ({ title, subtitle }: Props) => {
  return (
    <div className="md:pl-10 xl:pl-20 bg-white rounded-md p-5 shadow-lg shadow-textBlue/50">
      <div className="container ">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left text-black">
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
          <FeatureComponent
            logo={coding}
            heading=" Questions, Community & Contests"
            description="Over 2800 questions for you to practice."
          />
          <div className="lg:ml-10">
            <FeatureComponent
              logo={developer}
              heading="Developer"
              description="We now support 14 popular coding languages."
            />
          </div>
          <div className="">
            <FeatureComponent
              logo={company}
              heading="Companies & Candidates"
              description="Not only does RedCoder prepare candidates for technical interviews."
            />
          </div>
        </div>
        <div className="w-5/6 md:w-1/2  xl:max-w-xl">
          <Image object-fit="cover" alt="lawinzo" src={heroImage} priority />
        </div>
      </div>
    </div>
  );
};

export default FeatureStyle1;
