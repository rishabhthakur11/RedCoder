import { authModalState } from "@/atoms/authModalAtom";
import React from "react";
import { useSetRecoilState } from "recoil";

type Props = {};

const Signup = (props: Props) => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const handleClick = () => {
    setAuthModalState((prev) => ({ ...prev, type: "login" }));
  };
  return (
    <form className="space-y-6 px-6 pb-4 pt-6">
      <h3 className="text-xl font-medium text-white">Register to RedCoder</h3>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-2 text-textGray"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-textRed focus:border-textRed block w-full p-2.5 bg-white border-lightBrown placeholder-textGray text-black"
          placeholder="name@company.com"
        />
      </div>
      <div>
        <label
          htmlFor="displayName"
          className="text-sm font-medium block mb-2 text-textGray"
        >
          Display Name
        </label>
        <input
          type="displayName"
          name="displayName"
          id="displayName"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-textRed focus:border-textRed block w-full p-2.5 bg-white border-lightBrown placeholder-textGray text-black"
          placeholder="John Doe"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="text-sm font-medium block mb-2 text-textGray"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-textRed focus:border-textRed block w-full p-2.5 bg-white border-lightBrown placeholder-textGray text-black mb-2"
          placeholder="Password"
        />
      </div>

      <button
        type="submit"
        className="w-full text-white font-medium rounded-lg
        text-sm px-5 py-3 text-center bg-textRed"
      >
        Register
      </button>

      <div className="text-sm font-medium text-gray-300">
        Already have an account ?
        <a
          href="#"
          className="text-textBlue hover:underline ml-2"
          onClick={handleClick}
        >
          Log In
        </a>
      </div>
    </form>
  );
};

export default Signup;
