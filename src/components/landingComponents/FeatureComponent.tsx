import { StaticImageData } from "next/image";
import React from "react";
import { Icons } from "./IconComponent";

interface Props {
  logo: StaticImageData;
  heading: string;
  description: string;
}

const FeatureComponent = ({ logo, heading, description }: Props) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 ">
        <Icons logo={logo} />
        <div>
          <h1 className="font-bold text-[16px] mb-2 text-black">{heading}</h1>
          <div className="text-[14px] text-[#4D4D4D] font-normal">
            <p>{description} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureComponent;
