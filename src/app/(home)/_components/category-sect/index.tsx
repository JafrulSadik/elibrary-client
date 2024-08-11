"use client";

import Link from "next/link";
import { BiSolidCategory } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../../../../components/card";
import Category from "../category";

const CategorySect = () => {
  return (
    <div className="flex flex-col items-center bg-peace-400 pt-8 pb-14 w-full">
      {/* Vertical line design */}
      <div className="h-2 w-8 mb-8 rounded bg-gradient-to-t from-crusta-700 to-crusta-400" />
      <h1 className="text-xl md:text-3xl text-white font-extrabold tracking-tight">
        Choose Your Category
      </h1>

      <Category />

      <div className="max-w-7xl w-[90%] flex flex-col items-center justify-center gap-10">
        {/* Category wize books */}
        <div className="flex flex-col gap-2 md:gap-8 py-6 md:py-12 px-8 md:px-16 min-h-36 w-full rounded-lg bg-crusta-350">
          <div className="flex justify-between">
            <div className="flex text-black gap-2 items-center ">
              <div className=" text-crusta-950">
                <BiSolidCategory size={20} />
              </div>
              <h1 className="text-sm md:text-base font-bold text-crusta-950">
                History
              </h1>
            </div>
            <Link href="">Show More</Link>
          </div>

          <div className="flex justify-between">
            <Swiper
              slidesPerView={1}
              breakpoints={{
                400: {
                  slidesPerView: 2,
                },
                620: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1100: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1200: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
              spaceBetween={10}
              className="my-2"
            >
              <SwiperSlide className="flex justify-center p-2">
                <Card />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center p-2">
                <Card />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center p-2">
                <Card />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center p-2">
                <Card />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center p-2">
                <Card />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySect;
