import BrandCarousel from "./BrandCarousel";
import ButtonComponet from "./ButtonComponet";
import React from "react";
import Link from "next/link";

interface Props {}

const BannerSection = (props: Props) => {
  return (
    <div className="bg-[#EABF4E]  mt-[50px] py-[80px]">
      <div className="container mx-auto flex px-5  md:flex-row flex-col items-center max-w-7xl mx-auto">
        <div className="lg:flex-grow md:w-1/2  md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="xl:text-[40px] text-4xl leading-[62px]  mb-4 font-extralight text-gray-900">
            Why are you waiting for{" "}
            <span className="font-bold">Let’s start with Lawinzo</span>
          </h1>
          <div className="flex lg:flex-row md:flex-col">
            <Link href="https://erp-dev.lawinzo.com" target="_blank">
              <ButtonComponet
                title="Lawyer Login"
                color="#151513"
                textColor="#FFFF"
              />
            </Link>
          </div>
          <div>
            <h1 className="mt-8 leading-relaxed lg:text-[20px] lg:font-bold md:leading-[30px]">
              Automated Case Updates
            </h1>
            <p className="leading-relaxed text-[14px] lg:font-normal md:leading-[30px]">
              Automated fetching of all case orders, judgements & hearing dates
            </p>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {/* crousal */}
          <BrandCarousel />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
