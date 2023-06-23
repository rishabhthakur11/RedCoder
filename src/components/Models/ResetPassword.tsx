import { authModalState } from "@/atoms/authModalAtom";
import React from "react";
import { useSetRecoilState } from "recoil";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type Props = {};

function ResetPassword({}: Props) {
  const setAuthModalState = useSetRecoilState(authModalState);
  const handleClick = () => {
    setAuthModalState((prev) => ({ ...prev, type: "login" }));
  };
  return (
    <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8 pt-6">
      <button
        type="button"
        className="bg-transparent inline-flex items-center"
        onClick={handleClick}
      >
        <ArrowBackIcon />
      </button>
      <h3 className="text-xl font-medium  text-white">Reset Password</h3>
      <p className="text-sm text-white ">
        Forgotten your password? Enter your e-mail address below, and we&apos;ll
        send you an e-mail allowing you to reset it.
      </p>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-textRed focus:border-textRed block w-full p-2.5 bg-white border-lightBrown placeholder-textGray text-black mb-4"
          placeholder="name@company.com"
        />
      </div>

      <button
        type="submit"
        className={`w-full text-white font-medium rounded-lg
        text-sm px-5 py-3 text-center bg-textRed`}
      >
        Reset Password
      </button>
    </form>
  );
}

export default ResetPassword;
