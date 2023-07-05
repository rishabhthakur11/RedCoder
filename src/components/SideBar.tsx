import Link from "next/link";
import React from "react";
import { sideBarData } from "@/utilities/SideBarData";

export const SideBar = () => {
  return (
    <>
      <div className="text-lg font-normal text-textGray  gap-y-8 flex flex-col mt-10 ml-6">
        <Link className="hover:text-textRed" href="/problems">
          Problems
        </Link>
        <Link className="hover:text-textRed" href="/contest">
          Contest
        </Link>
        <Link className="hover:text-textRed" href="/discuss">
          Discuss
        </Link>
      </div>
    </>
  );
};
