import { Header } from "@/components/Header";
import { Roboto } from "next/font/google";
import React from "react";

type Props = {};
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const contest = (props: Props) => {
  return (
    <div className={`flex flex-col ${roboto.className} mb-10 h-screen`}>
      <div className="left-0 top-0 bg-mildBrown pt-3 pb-3 lg:p-3">
        <Header />
      </div>
      <p>contest Page is here</p>
    </div>
  );
};

export default contest;
