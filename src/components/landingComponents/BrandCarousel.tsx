import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import image1 from "@/Assets/Course/assets/CarouselImages/image1.png";
import image2 from "@/Assets/Course/assets/CarouselImages/image2.png";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const BrandCarousel = () => {
  return (
    <div className="carousal-container">
      <div className="container mx-auto">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={true}
          showThumbs={false}
          interval={5000}
          renderArrowPrev={(clickHandler, hasPrev) => {
            return (
              <div
                className={`${
                  hasPrev ? "absolute" : "hidden"
                } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <ArrowLeftIcon className="w-9 h-9 text-white bg-[black] p-1 rounded-full" />
              </div>
            );
          }}
          renderArrowNext={(clickHandler, hasNext) => {
            return (
              <div
                className={`${
                  hasNext ? "absolute" : "hidden"
                } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <ArrowRightIcon className="w-9 h-9 text-white bg-[black] p-1 rounded-full" />
              </div>
            );
          }}
        >
          <div className="max-w-full">
            <Image src={image1} alt="image1" priority />
          </div>
          <div className="max-w-full">
            <Image src={image2} alt="image2" priority />
          </div>
          <div className="max-w-full">
            <Image src={image1} alt="image1" priority />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default BrandCarousel;
