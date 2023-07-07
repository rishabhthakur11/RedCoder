import FeatureStyle1 from "./FeatureStyle1";
import FeatureStyle2 from "./FeatureStyle2";
import React from "react";

interface Props {}

const ChoosingSection = (props: Props) => {
  return (
    <div className="choosing-section mt-10 md:mt-26 xl:mt-36 2xl:mt-52">
      <div className="container max-w-7xl mx-auto">
        <div className="mb-10 flex flex-col text-center px-2 md:px-6 xl:px-0">
          <h1 className="mb-3 text-3xl xl:text-5xl font-bold text-center">
            Why Choose Us
          </h1>
          <p className="mb-5 text-sm lg:text-base font-normal text-center">
            At RedCoder, our mission is to help you improve yourself and land
            your dream job.
          </p>
        </div>
        {/* Reusable Components */}
        <div className="p-5">
          <div className="mb-20">
            <FeatureStyle1
              title="Effortless Problem Navigation"
              subtitle="Instant Access to all top Companies Questions"
            />
          </div>
          <div className="md:mb-20">
            <FeatureStyle2
              title="Track your Performance"
              subtitle="Instant Access to profile and streak Section"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosingSection;
