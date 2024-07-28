"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import HeroImg from "./../../../public/images/hero-1.png";
// Import Swiper React components

const Slider = () => {
  return (
    <div className="w-[90%] max-w-7xl my-2 md:my-10 ">
      <Swiper className="mySwiper container">
        <SwiperSlide className="flex justify-center items-center">
          <div className="flex items-center gap-2 md:gap-8">
            {/* Hero Title */}
            <div className="flex flex-col flex-1 gap-3 md:gap-5 justify-center">
              <h1 className="font-bold text-[12px] md:text-[15px] lg:text-[36px] text-soft-peach-950">
                Share, Purchase, and Download Premium PDF books Instantly
              </h1>
              <p className="font-light hidden md:block text-soft-peach-600 text-[10px] md:text-[15px] lg:text-[20px]">
                Unlock a World of Knowledge withOur Extensive Collection of
                High-Quality PDF Books Across Various Categories.
              </p>
              <button className="text-[10px] text-light md:text-bold md:text-[16px] py-1 md:py-2  shadow-md bg-gradient-to-t from-crusta-500 to-crusta-400 hover:bg-crusta-600 font-light text-white rounded-md w-14 md:w-24">
                Purchase
              </button>
            </div>

            {/* Hero Image */}
            <div className="flex flex-1 items-center justify-center">
              <Image src={HeroImg} alt="hero-img.jpg" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
