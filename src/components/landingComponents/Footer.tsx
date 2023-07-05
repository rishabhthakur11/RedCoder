import React from "react";
import Image from "next/image";
import logo from "../assets/logo/whitebg.png";
import playStoreButton from "../assets/Footer/playStoreButton.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="md:px-20 px-8 text-black py-10">
      <div className="flex flex-col md:flex-row">
        <div className="container  md:w-1/2">
          <Link href="/">
            <Image
              className="contain-cover"
              alt="lawinzo"
              src={logo}
              width={60}
              priority
            />
          </Link>
          <div>
            <p className="mt-5 text-[16px] text-[#1B1B1F]">
              Lawinzo is India’s largest online legal service marketplace,
              Download our apps to using our services
            </p>
            <p className="mt-5 text-[16px] text-[#1B1B1F]">
              Starting using lawinzo?
            </p>
          </div>
          <div>
            <p className="mt-10 font-semibold text-[16px] text-[#EABF4E]">
              Reach out to us:
            </p>
            <p className="mt-2 text-[14px] text-[#1B1B1F] font-extralight">
              Get your questions answered about learning with Lawinzo
            </p>
          </div>
          <div>
            <p className="mt-10 font-bold text-[16px] text-[#2089EB]">
              Call: +91 8920766203
            </p>
          </div>
        </div>
        <div className="md:ml-16 mt-10 md:mt-0">
          <div className="flex gap-10">
            <div>
              <h1 className="font-semibold text-[16px] text-[#1B1B1F]">
                Company
              </h1>
              <div className="mt-2 flex flex-col gap-y-1">
                {/* <a href="#" className="font-extralight text-[14px]">
                  About Us
                </a> */}
                {/* <a href="#" className="font-extralight text-[14px]">
                  Careers
                </a> */}
                {/* <a href="#" className="font-extralight text-[14px]">
                  Blogs
                </a> */}
                <Link href="/privacy" className="font-extralight text-[14px]">
                  Privacy policy
                </Link>
                <Link href="/terms" className="font-extralight text-[14px]">
                  Terms and conditions
                </Link>
              </div>
            </div>

            <div>
              <h1 className="font-semibold text-[16px] text-[#1B1B1F]">
                Product
              </h1>
              <div className="mt-2 flex flex-col gap-y-1">
                {/* <a href="#" className="font-extralight text-[14px]">
                  Client
                </a> */}
                <a href="#" className="font-extralight text-[14px]">
                  Lawyers/Law Firms
                </a>
                {/* <a href="#" className="font-extralight text-[14px]">
                  Case Manager
                </a> */}
                <div className="mt-2">
                  <Image
                    className="contain-cover"
                    alt="lawinzo"
                    src={playStoreButton}
                    width={100}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="mt-5 text-[14px] text-[#1B1B1F]">2023 @ Lawinzo.com</p>
        <p className="mt-5 text-[14px] text-[#1B1B1F]">
          lawinzo is not a law firm, or a substitute for a lawyer or law firm.
          We are also not a "lawyer referral service". Use of this website will
          be at the sole risk of the user. Use of any service will not create
          any lawyer-client relationship.
        </p>
        <p className="mt-5 text-[14px] text-[#1B1B1F]">
          lawinzo will not be liable for any consequence of any action taken by
          the user relying on information or services provided under this
          website. In cases where the user has any legal issues, he/she in all
          cases must seek independent legal advice. Use of our products and
          services are governed by our Terms of Use and Privacy Policy .
        </p>
      </div>
    </div>
  );
};

export default Footer;
