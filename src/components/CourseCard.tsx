import React from "react";
import Image, { StaticImageData } from "next/image";
interface Props {
  details: {
    title: string;
    subtitle: string;
    image: StaticImageData;
  };
}

export const CourseCard = ({ details }: Props) => {
  return (
    <div className="bg-boxBrown p-3 rounded-md hover:bg-lightBrown cursor-pointer">
      <div className="flex items-center gap-2">
        <Image
          className="rounded-md"
          src={details.image}
          priority
          width={80}
          alt="course1"
        />
        <div>
          <h1 className="text-xs lg:text-base">{details.title}</h1>
          <p className="mt-1 text-[8px] text-textGray lg:text-sm">
            {details.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
