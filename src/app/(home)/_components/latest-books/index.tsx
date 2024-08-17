"use client";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../../../../components/card";

const LatestBooks = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-10">
      {/* Category wize books */}
      <div className="flex flex-col gap-4 md:gap-8 py-8 md:py-12 px-6 md:px-16 min-h-36 w-full rounded-lg bg-white">
        <div className="flex text-black gap-2 items-center ">
          <div className="p-2 text-white bg-gradient-to-t from-crusta-400 to-crusta-300 rounded-full">
            <FaArrowTrendUp />
          </div>
          <h1 className="text-sm md:text-base font-bold">Latest Books</h1>
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

export default LatestBooks;
