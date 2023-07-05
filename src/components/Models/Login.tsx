import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/router";
import { authModalState } from "@/atoms/authModalAtom";
import { toast } from "react-toastify";

type Props = {};

function Login({}: Props) {
  const setAuthModalState = useSetRecoilState(authModalState);
  const handleClick = (type: "login" | "register" | "forgotPassword") => {
    setAuthModalState((prev) => ({ ...prev, type }));
  };

  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password)
      return toast.error("Please fill all fields", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
      });
    try {
      const newUser = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser) return;
      router.replace("/problems");
    } catch (error: any) {
      toast.error("Email and Password don't match", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    if (error)
      toast.error("Email and Password don't match", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
  }, [error]);
  return (
    <form className="space-y-6 px-6 pb-4 pt-6" onSubmit={handleLogin}>
      <h3 className="text-xl font-medium text-white">Sign in to RedCoder</h3>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-2 text-textGray"
        >
          Your Email
        </label>
        <input
          onChange={handleInputChange}
          type="email"
          name="email"
          id="email"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-textRed focus:border-textRed block w-full p-2.5 bg-white border-lightBrown placeholder-textGray text-black"
          placeholder="name@company.com"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="text-sm font-medium block mb-2 text-textGray"
        >
          Your Password
        </label>
        <input
          onChange={handleInputChange}
          type="password"
          name="password"
          id="password"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-textRed focus:border-textRed block w-full p-2.5 bg-white border-lightBrown placeholder-textGray text-black mb-4"
          placeholder="Password"
        />
      </div>

      <button
        type="submit"
        className="w-full text-white font-medium rounded-lg
        text-sm px-5 py-3 text-center bg-textRed"
      >
        {loading ? "Loading..." : "Log In"}
      </button>
      <button className="flex w-full justify-end">
        <a
          href="#"
          className="text-sm block text-textRed hover:underline w-full text-right"
          onClick={() => handleClick("forgotPassword")}
        >
          Forgot Password?
        </a>
      </button>
      <div className="text-sm font-medium text-textGray">
        Not Registered ?
        <a
          href="#"
          className="text-textBlue hover:underline ml-2"
          onClick={() => handleClick("register")}
        >
          Create account
        </a>
      </div>
    </form>
  );
}

export default Login;
