import { Header } from "@/components/Header";
import React from "react";
import { Roboto } from "next/font/google";

type Props = {};
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
export default function discuss({}: Props) {
  return (
    <div className={`flex flex-col ${roboto.className} mb-10 h-screen`}>
      <div className="left-0 top-0 bg-mildBrown pt-3 pb-3 lg:p-3">
        <Header problemPage={false} />
      </div>
      <p>Discuss Page is Here</p>
    </div>
  );
}
