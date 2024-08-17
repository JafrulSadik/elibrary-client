"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import StarIcon from "../../../../../public/icons/star/StarIcon";
import Card from "../../../../components/card";

const PopularBooks = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-10">
      {/* Category wize books */}
      <div className="flex flex-col gap-4 md:gap-8 py-8 md:py-12 px-6 md:px-16 min-h-36 w-full rounded-lg bg-white">
        <div className="flex text-black gap-2 items-center ">
          <div className=" text-crusta-400">
            <StarIcon />
          </div>
          <h1 className="text-sm md:text-base font-bold">Popular Books</h1>
        </div>

        <div className="w-full">
          <Swiper
            slidesPerView={1}
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              500: {
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
            spaceBetween={0}
          >
            <SwiperSlide className="px-1">
              <Card />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PopularBooks;
