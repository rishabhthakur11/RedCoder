import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { blogData } from "../src/Utilities/BlogData";
import BlogCard from "./BlogCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const BlogSection = () => {
  return (
    <div className="bg-[#F5F8FF] py-16">
      <div className="container mx-auto text-center">
        <div className="flex flex-col justify-center px-2 md:px-6 xl:px-0">
          <h1 className="mb-3 text-3xl xl:text-5xl font-bold text-center">
            Join Our Blog Community
          </h1>
          <p className="text-sm lg:text-base font-regular text-center">
            Welcome aboard! Let's make the most of your journey with intuitive
            navigation, tailored recommendations, and endless possibilities.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center mt-14 px-5 xl:px-0">
          <Swiper
            spaceBetween={-22}
            slidesPerView={1}
            breakpoints={{
              // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
              },
              1024: {
                width: 1024,
                slidesPerView: 2,
              },

              1275: {
                width: 1275,
                slidesPerView: 4,
              },
              1526: {
                width: 1526,
                slidesPerView: 5,
              },
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
          >
            {blogData.map((data) => (
              <SwiperSlide key={data.id}>
                <BlogCard
                  image={data.image}
                  publishDate={data.publishDate}
                  category={data.category}
                  title={data.title}
                  description={data.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
