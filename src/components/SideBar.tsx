import Link from "next/link";
import React from "react";
import { sideBarData } from "@/utilities/SideBarData";

export const SideBar = () => {
  return (
    <>
      <div className="text-lg font-normal text-textGray  gap-y-8 flex flex-col mt-10 ml-6">
        <Link className="hover:text-textRed" href="/">
          Explore
        </Link>
        <Link className="hover:text-textRed" href="/problem">
          Problems
        </Link>
        <Link className="hover:text-textRed" href="/">
          Contest
        </Link>
        <Link className="hover:text-textRed" href="/">
          Discuss
        </Link>
      </div>
    </>
  );
};
