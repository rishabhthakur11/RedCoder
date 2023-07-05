import { StaticImageData } from "next/image";
import React from "react";
import { Icons } from "./IconComponent";

interface Props {
  title: string;
  value: number;
  description: string;
  logo: StaticImageData;
  colorFrom: string;
}

export const OperationPointers = ({
  title,
  description,
  value,
  logo,
  colorFrom,
}: Props) => {
  const colorVariants: any = {
    blue: "hover:from-[#4E94F6] hover:to-[#80C0FB]",
    orange: "hover:from-[#E6791F] hover:to-[#F89E71]",
    violet: "hover:from-[#5947C7] hover:to-[#9180FB]",
  };
  return (
    <div
      className={`flex flex-col items-start relative mt-16 md:mb-0 md:mt-0 w-[342px] h-[254px] rounded-lg z-20 bg-gradient-to-r ${colorVariants[colorFrom]} cursor-pointer transition ease-in-out delay-150 hover:scale-105 duration-300`}
    >
      <div className="flex flex-col z-20 p-[24px]">
        <Icons logo={logo} />
        <h1 className="text-lg font-bold mt-4">{title}</h1>
        <p className="text-base font-light mt-4 md:w-[90%]">{description}</p>
      </div>
      <h1 className="absolute text-[204px]  font-black  right-10 -z-10  -top-10  lg:top-0 text-[#E9EBF2]">
        {value}
      </h1>
    </div>
  );
};
