import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  image: StaticImageData;
  publishDate: string;
  category: string;
  title: string;
  description: string;
}

const BlogCard = ({
  image,
  publishDate,
  category,
  title,
  description,
}: Props) => {
  return (
    <div className="max-w-sm lg:max-w-md bg-transparent rounded-lg text-left p-8">
      <Image className="rounded-t-lg" src={image} alt="" priority />

      <div className="flex mt-3 text-[#64607D] text-[10px] font-light">
        <p>{publishDate}</p>
        <p>{category}</p>
      </div>
      <div className="mt-5">
        <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900">
          {title}
        </h5>

        <p className="mb-3 text-xs font-normal text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
