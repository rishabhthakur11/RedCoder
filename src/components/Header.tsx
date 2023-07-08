import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import logo from "../Assets/Logo/logoWhite.png";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import avatar from "../Assets/Logo/avatar.png";
import CloseIcon from "@mui/icons-material/Close";
import { SideBar } from "./SideBar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
import Logout from "./Logout";
import { Button } from "@mui/material";
import { red, grey } from "@mui/material/colors";
import LoginIcon from "@mui/icons-material/Login";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TerminalIcon from "@mui/icons-material/Terminal";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useRouter } from "next/router";
import { problems } from "@/utilities/problems";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ReorderIcon from "@mui/icons-material/Reorder";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Problem } from "@/utilities/types/problem";
import Timer from "./Timer/Timer";

type HeaderProps = {
  problemPage?: boolean;
};
export const Header = ({ problemPage }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  let name = undefined;
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();
  const activePage = router.pathname; // Get the current active page path

  const [user] = useAuthState(auth);
  const setAuthModalState = useSetRecoilState(authModalState);
  const [sideBar, setSideBar] = useState(false);
  const [sideBarIcon, setSideBarIcon] = useState(true);
  const manageSideBar = () => {
    setSideBar(!sideBar);
    setSideBarIcon(!sideBarIcon);
  };
  if (user) {
    const parts = user.email?.split("@");
    if (parts) name = parts[0];
  }
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };
  const handleProblemChange = (isForward: boolean) => {
    const { order } = problems[router.query.pid as string] as Problem;
    const direction = isForward ? 1 : -1;
    const nextProblemOrder = order + direction;
    const nextProblemKey = Object.keys(problems).find(
      (key) => problems[key].order === nextProblemOrder
    );

    if (isForward && !nextProblemKey) {
      const firstProblemKey = Object.keys(problems).find(
        (key) => problems[key].order === 1
      );
      router.push(`/problems/${firstProblemKey}`);
    } else if (!isForward && !nextProblemKey) {
      const lastProblemKey = Object.keys(problems).find(
        (key) => problems[key].order === Object.keys(problems).length
      );
      router.push(`/problems/${lastProblemKey}`);
    } else {
      router.push(`/problems/${nextProblemKey}`);
    }
  };
  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="mx-5 flex justify-between items-center max-w-7xl mx-auto shrink-0">
      {/* Left Section */}
      <div className="flex gap-x-5 md:gap-x-10 items-center flex-1">
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
        <Image src={logo} alt="RedCoder" width={80} priority />
        {/* Nav Link */}
        <div className="text-lg font-normal text-textGray flex gap-x-8 items-center hidden lg:flex">
          <Link
            className={`hover:text-textRed ${
              activePage === "/problems" ? "text-textRed" : ""
            }`}
            href="/problems"
          >
            Problems
          </Link>
          <Link
            className={`hover:text-textRed ${
              activePage === "/contest" ? "text-textRed" : ""
            }`}
            href="/contest"
          >
            Contest
          </Link>
          <Link
            className={`hover:text-textRed ${
              activePage === "/discuss" ? "text-textRed" : ""
            }`}
            href="/discuss"
          >
            Discuss
          </Link>
        </div>
      </div>
      <div>
        {problemPage && (
          <div className="flex items-center gap-4 flex-1 justify-center">
            <div
              className="flex items-center justify-center rounded bg-boxBrown h-8 w-8 cursor-pointer text-white"
              onClick={() => handleProblemChange(false)}
            >
              <ChevronLeftIcon />
            </div>
            <Link
              href="/problems"
              className="flex items-center gap-2 font-medium max-w-[170px] text-textGray cursor-pointer"
            >
              <div>
                <ReorderIcon />
              </div>
              <p>Problem List</p>
            </Link>
            <div
              className="flex items-center justify-center rounded bg-boxBrown h-8 w-8 cursor-pointer text-white"
              onClick={() => handleProblemChange(true)}
            >
              <ChevronRightIcon />
            </div>
          </div>
        )}
      </div>
      {/* Right Side */}
      <div className="flex items-center gap-x-8 flex-1  justify-end">
        {/* Premium Button */}
        <button className="p-2 text-lg font-normal text-textRed bg-boxBrown rounded-md hidden md:block w-24 h-12">
          <Link href="/premium">Premium</Link>
        </button>
        {/* streak icon */}
        {/* {user && (
          <div className="flex gap-x-1 items-center hidden md:flex">
            <WhatshotIcon fontSize="medium" />
            <p className="text-lg font-bold text-textRed">100</p>
          </div>
        )} */}
        {user && problemPage && <Timer />}
        {/* profile Section */}
        {!user && (
          <Link
            href="/auth"
            onClick={() =>
              setAuthModalState((prev) => ({
                ...prev,
                type: "login",
              }))
            }
          >
            <Button
              variant="outlined"
              sx={{ color: red[500] }}
              startIcon={<LoginIcon />}
            >
              Sign In
            </Button>
          </Link>
        )}
        {user && (
          <div className="cursor-pointer">
            <Image
              className="w-8 h-8 p-1 rounded-full ring-2 ring-textRed"
              src={avatar}
              alt="Bordered avatar"
              width={80}
              onClick={toggleDropdown}
            />
            {isOpen && (
              <div
                className="absolute right-1 mt-2 w-80 bg-white shadow-lg shadow-lightBrown z-40"
                ref={dropdownRef}
              >
                {/* Dropdown options */}
                <div className="flex gap-3 items-center px-4 py-2">
                  <AccountCircleIcon
                    sx={{ color: grey[500] }}
                    fontSize="large"
                  />
                  <p className="text-lg text-black font-light">{name}</p>
                </div>
                <hr className="text-textGray" />
                <div className="mt-2 text-black text-lg  font-light flex flex-col gap-y-4">
                  <div className="flex gap-3 items-center px-4 py-2 hover:bg-textLightGray cursor-pointer">
                    <FavoriteBorderIcon
                      sx={{ color: grey[500] }}
                      fontSize="large"
                    />
                    <p className="">My List</p>
                  </div>

                  <div className="flex gap-3 items-center px-4 py-2 hover:bg-textLightGray cursor-pointer">
                    <TerminalIcon sx={{ color: grey[500] }} fontSize="large" />
                    <p className="">My Playground</p>
                  </div>

                  <div className="flex gap-3 items-center px-4 py-2 hover:bg-textLightGray cursor-pointer">
                    <NoteAddIcon sx={{ color: grey[500] }} fontSize="large" />
                    <p className="">Notebook</p>
                  </div>

                  <div className="flex gap-3 items-center px-4 py-2 hover:bg-textLightGray cursor-pointer">
                    <AccessTimeIcon
                      sx={{ color: grey[500] }}
                      fontSize="large"
                    />
                    <p className="">Submission</p>
                  </div>

                  <div className="flex gap-3 items-center px-4 py-2 hover:bg-textLightGray cursor-pointer">
                    <InsertChartOutlinedIcon
                      sx={{ color: grey[500] }}
                      fontSize="large"
                    />
                    <p className="">Sessions</p>
                  </div>
                  <div className="flex gap-3 items-center px-4 py-2 hover:bg-textLightGray cursor-pointer">
                    <DonutSmallIcon
                      sx={{ color: grey[500] }}
                      fontSize="large"
                    />
                    <p className="">Progress</p>
                  </div>
                  <div className="flex gap-3 items-center px-4 py-2 hover:bg-textLightGray cursor-pointer">
                    <BookmarkIcon sx={{ color: grey[500] }} fontSize="large" />
                    <p className="">Subscription</p>
                  </div>
                  <div className="flex gap-3 items-center px-5 py-2 ">
                    {user && <Logout />}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
