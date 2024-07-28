"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import StarIcon from "../../../../../public/icons/star/StarIcon";
import Card from "../../../../components/card";

const PopularBooks = () => {
  return (
    <div className="flex flex-col gap-2 md:gap-8 py-6 md:py-12 px-8 md:px-16 min-h-36 w-full rounded-lg bg-white">
      <div className="flex text-black gap-2 items-center ">
        <div className=" text-crusta-400">
          <StarIcon />
        </div>
        <h1 className="text-sm md:text-base font-bold">Popular Books</h1>
      </div>

      <div className="flex">
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
  );
};

export default PopularBooks;
