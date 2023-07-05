import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  logo: StaticImageData;
}

export const Icons = ({ logo }: Props) => {
  return (
    <div className="bg-white rounded-md drop-shadow-md w-14">
      <Image object-fit="cover" alt="home Logo" src={logo} priority />
    </div>
  );
};
