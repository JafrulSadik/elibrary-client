"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../../../../components/card";

const AllBooks = () => {
  return (
    <div className="flex flex-col gap-2 md:gap-8 py-6 md:py-12 px-8 md:px-16 min-h-36 w-full rounded-lg bg-gradient-to-t from-crusta-700 to-crusta-400">
      <div className="flex text-white justify-between">
        <h1 className="text-sm md:text-base font-bold">All Books</h1>
        <Link href="">Show More</Link>
      </div>
      <div className="flex">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            400: {
              slidesPerView: 2,
              spaceBetween: 10,
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

export default AllBooks;
