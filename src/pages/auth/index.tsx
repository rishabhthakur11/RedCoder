import { Header } from "@/components/Header";
import AuthModel from "@/components/Models/AuthModel";
import Navbar from "@/components/Navbar";
import React from "react";

type Props = {};

const AuthPage = (props: Props) => {
  return (
    <div className="h-screen relative">
      <div className="max-7-xl mx-auto">
        <Navbar />
        <AuthModel />
      </div>
    </div>
  );
};
export default AuthPage;
