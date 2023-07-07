import React from "react";
import heroImage from "@/Assets/Course/heroImage.png";
import Image from "next/image";
import IphoneMokup from "@/Assets/Course/assets/heroSection/iPhonemokup.png";
import { useRouter } from "next/router";

export const HeroSection = () => {
  const router = useRouter();
  const handleSubmit = (event: any) => {
    router.push("/problems");
  };

  return (
    <div className="flex py-12 md:py-24 lg:flex-row flex-col-reverse items-center">
      <div className="lg:px-10 flex flex-col lg:items-start lg:text-left mb-16 md:mb-0 items-center text-center max-w-3xl mx-auto mt-3">
        <h1 className="xl:text-6xl text-4xl xl:leading-[65px] leading-normal mb-4 font-normal">
          A New Way to Learn <span className="font-bold">Coding</span>
        </h1>
        <p className="mb-8 text-sm leading-relaxed lg:text-base lg:font-normal w-[90%] md:leading-[30px]">
          Redcoder is the best platform to help you enhance your skills, expand
          your knowledge and prepare for technical interviews.
        </p>
        {/* Add Login button */}
        <div className="flex flex-col w-full items-center lg:items-start px-3 lg:px-0">
          <div className="pt-[15px] pb-[15px] pr-4 pl-4 text-sm font-medium text-black bg-textRed rounded-r-sm hover:scale-105 duration-300">
            <button onClick={handleSubmit}>Get Started</button>
          </div>
        </div>
      </div>
      {/* HeroImage Section */}
      <div className="hidden lg:block lg:max-w-lg  md:w-1/2 w-5/6 relative">
        <Image object-fit="cover" alt="lawinzo" src={heroImage} priority />
      </div>
      <div className="lg:hidden lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex-col-reverse flex items-center justify-center mb-10">
        <Image
          className="contain-cover"
          alt="lawinzo"
          src={heroImage}
          width={220}
          priority
        />
      </div>
    </div>
  );
};
