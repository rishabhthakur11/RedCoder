import { StaticImageData } from "next/image";
import React from "react";
import { Icons } from "./IconComponent";

interface Props {
  logo: StaticImageData;
}

const FeatureComponent = ({ logo }: Props) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3">
        <Icons logo={logo} />
        <div>
          <h1 className="font-bold text-[16px] mb-2">Heading 1</h1>
          <div className="text-[14px] text-[#4D4D4D] font-normal">
            <p>Instant Access to Cases and Hearings</p>
            <p>Instant Access to Cases and Hearings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureComponent;
