import React from "react";
import logo from "../Assets/Logo/logoWhite.png";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="md:px-20 px-8 text-white mt-32 pb-10 bg-black">
      <div className="flex flex-col md:flex-row">
        <div className="container  md:w-1/2">
          <Link href="/">
            <Image
              className="contain-cover"
              alt="lawinzo"
              src={logo}
              width={100}
              priority
            />
          </Link>
          <div>
            <p className="mt-5 text-[16px] text-white">
              RedCoder is the best platform to help you enhance your skills,
              expand your knowledge and prepare for technical interviews.
            </p>
            <p className="mt-5 text-[16px] text-white">
              Starting using RedCoder?
            </p>
          </div>
          <div>
            <p className="mt-10 font-semibold text-[16px] text-[#EABF4E]">
              Reach out to us:
            </p>
            <p className="mt-2 text-[14px] text-white font-extralight">
              Get your questions answered about learning with RedCoder
            </p>
          </div>
          <div>
            <p className="mt-10 font-bold text-[16px] text-[#2089EB]">
              2023 @ redcoder.com
            </p>
          </div>
        </div>
        <div className="md:ml-16 mt-10 md:mt-0">
          <div className="flex gap-10">
            <div>
              <h1 className="font-semibold text-[16px] text-white">Company</h1>
              <div className="mt-2 flex flex-col gap-y-2">
                <a href="#" className="font-extralight text-[14px]">
                  About Us
                </a>
                <a href="#" className="font-extralight text-[14px]">
                  Careers
                </a>
                <a href="#" className="font-extralight text-[14px]">
                  Blogs
                </a>
                <Link href="/privacy" className="font-extralight text-[14px]">
                  Privacy policy
                </Link>
                <Link href="/terms" className="font-extralight text-[14px]">
                  Terms and conditions
                </Link>
              </div>
            </div>

            <div>
              <h1 className="font-semibold text-[16px] text-white">Product</h1>
              <div className="mt-2 flex flex-col gap-y-2">
                <a href="#" className="font-extralight text-[14px]">
                  Bug Bounty
                </a>
                <a href="#" className="font-extralight text-[14px]">
                  RedCoder
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
