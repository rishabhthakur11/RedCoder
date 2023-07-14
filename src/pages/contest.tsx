import { Header } from "@/components/Header";
import { Roboto } from "next/font/google";
import React from "react";

type Props = {};
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function contest(props: Props) {
  return (
    <div className={`flex flex-col ${roboto.className} mb-10 h-screen`}>
      <div className="left-0 top-0 bg-mildBrown pt-3 pb-3 lg:p-3">
        <Header problemPage={false} />
      </div>
      <div className="flex flex-col items-center justify-center h-screen bg-black">
        <h1 className="text-9xl font-bold mb-4 animate-fade-in-down">
          Coming Soon
        </h1>
        <p className="text-lg text-textGray mb-8 animate-fade-in-up">
          We're working hard to bring you an amazing experience.
        </p>
        <div className="flex animate-fade-in">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-textGray rounded-l-md focus:outline-none focus:ring-2 focus:ring-textBlue text-black"
          />
          <button
            type="button"
            className="px-4 py-2 bg-textRed text-white font-semibold rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-textBlue"
          >
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
}
