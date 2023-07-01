import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../Assets/Logo/logoWhite.png";
import avatar from "../Assets/Logo/avatar.png";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className="bg-mildBrown flex items-center justify-between sm:px-12 px-2 md:px-24">
      <Link
        href="/"
        className="flex items-center justify-center h-20 cursor-pointer"
      >
        <Image src={logo} alt="RedCoder" width={100} priority />
      </Link>
    </div>
  );
}

export default Navbar;
