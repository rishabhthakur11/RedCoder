import { StaticImageData } from "next/image";
import React from "react";
import { Icons } from "./IconComponent";

interface Props {
  logo: StaticImageData;
  description: string;
}

export const Pointers = (props: Props) => {
  return (
    <div className="flex items-center gap-x-3">
      <Icons logo={props.logo} />
      <p className="text-[16px] font-light w-[190px] 2xl:w-[200px] text-left">
        {props.description}
      </p>
    </div>
  );
};
