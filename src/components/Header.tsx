import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../Assets/Logo/logoWhite.png";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import avatar from "../Assets/Logo/avatar.png";
import ReorderIcon from "@mui/icons-material/Reorder";
import CloseIcon from "@mui/icons-material/Close";
import { SideBar } from "./SideBar";

export const Header = () => {
  const [sideBar, setSideBar] = useState(false);
  const [sideBarIcon, setSideBarIcon] = useState(true);
  const manageSideBar = () => {
    setSideBar(!sideBar);
    setSideBarIcon(!sideBarIcon);
  };
  return (
    <div className="mx-5 flex grow justify-between items-center">
      {/* Left Section */}
      <div className="flex gap-x-5 md:gap-x-10 items-center relative">
        {/* sideBar ICON */}
        <div className="lg:hidden">
          {sideBarIcon ? (
            <ReorderIcon fontSize="medium" onClick={() => manageSideBar()} />
          ) : (
            <CloseIcon fontSize="medium" onClick={() => manageSideBar()} />
          )}
        </div>
        {sideBar ? (
          <div className="bg-mildBrown fixed top-16 left-0 w-3/4 md:w-1/2 h-screen z-50 lg:hidden">
            <SideBar />
          </div>
        ) : null}
        {/* LOGO */}
        <Image src={logo} alt="RedCoder" width={100} height="auto" priority />
        {/* Nav Link */}
        <div className="text-lg font-normal text-textGray flex gap-x-8 items-center hidden lg:flex">
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
      </div>
      {/* Right Side */}
      <div className="flex items-center gap-x-8">
        {/* Premium Button */}
        <div className="p-2 text-lg font-normal text-textRed bg-boxBrown rounded-md hidden md:flex">
          <p>Premium</p>
        </div>
        {/* streak icon */}
        <div className="flex gap-x-1 items-center hidden md:flex">
          <WhatshotIcon fontSize="medium" />
          <p className="text-lg font-bold text-textRed">100</p>
        </div>
        {/* profile Section */}

        <Image
          className="w-10 h-10 p-1 rounded-full ring-2 ring-textRed"
          src={avatar}
          alt="Bordered avatar"
          width={80}
        />
      </div>
    </div>
  );
};
