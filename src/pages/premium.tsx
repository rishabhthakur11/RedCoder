import { Header } from "@/components/Header";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import Footer from "@/components/Footer";
import PremiumFeatureBox from "@/components/PremiumFeatureBox";

type Props = {};

export default function premium({}: Props) {
  return (
    <div className="">
      <div className="left-0 top-0 bg-mildBrown pt-3 pb-3 lg:p-3">
        <Header problemPage={false} />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-7xl font-bold tracking-tight text-textRed">
            Premium
          </h2>
          <p className="mt-6 text-lg leading-8 text-textGray">
            Take 15% off monthly and 20% off yearly subsciptions for a limited
            time with code
            <span className="text-textRed font-bold">BIGDEAL</span>
          </p>
        </div>
        <PremiumFeatureBox />
      </div>
      <Footer />
    </div>
  );
}
