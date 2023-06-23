import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import ResetPassword from "./ResetPassword";
import { useRecoilValue } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";

type Props = {};

const AuthModel = (props: Props) => {
  const authModal = useRecoilValue(authModalState);
  return (
    <>
      <div className="absolute top-0 left-0 flex items-center justify-center"></div>
      <div className="w-full sm:w-[450px]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center">
        <div className="relative w-full h-full mx-auto flex items-center justify-center">
          <div className="rounded-lg shadow relative w-full bg-boxBrown mx-6">
            {authModal.type === "login" ? (
              <Login />
            ) : authModal.type === "register" ? (
              <Signup />
            ) : (
              <ResetPassword />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthModel;
