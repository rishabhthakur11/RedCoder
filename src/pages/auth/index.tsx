import AuthModel from "@/components/Models/AuthModel";
import { authModalState } from "@/atoms/authModalAtom";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const AuthPage = (props: Props) => {
  const authModal = useRecoilValue(authModalState);
  const [user, loading, error] = useAuthState(auth);
  const [pageLoading, setPageLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (user) router.replace("/problems");
    if (!loading && !user) setPageLoading(false);
  }, [user, router, loading]);

  if (pageLoading) return null;

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
