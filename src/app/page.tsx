"use client";

import Link from "next/link";
import { BiSolidCategory } from "react-icons/bi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import StarIcon from "../../public/icons/star/StarIcon";
import Card from "../components/card";
import Slider from "../components/slider";
import WriterCard from "../components/writer-card";
import WriterCard2 from "../components/writer-card/extra/WriterCard";
import WriterCard1 from "../components/writer-card/extra/WriterCard1";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <Slider />
      {/* All books sect */}
      <div className="flex flex-col items-center bg-crusta-950 pt-8 pb-14 w-full">
        <div className="h-2 w-8 mb-8 rounded bg-gradient-to-t from-crusta-700 to-crusta-400" />

        {/* Vertical line design */}
        <div className="max-w-7xl w-[90%] flex flex-col items-center justify-center gap-10">
          {/* All Books */}
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

          {/* latest books */}
          <div className="flex flex-col gap-2 md:gap-8 py-6 md:py-12 px-8 md:px-16 min-h-36 w-full rounded-lg bg-white">
            <div className="flex text-black gap-2 items-center ">
              <div className="p-2 text-white bg-gradient-to-t from-crusta-400 to-crusta-300 rounded-full">
                <FaArrowTrendUp />
              </div>
              <h1 className="text-sm md:text-base font-bold">Latest Books</h1>
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

          {/* Popular books */}

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
        </div>
      </div>

      {/* Books category */}
      <div className="flex flex-col items-center bg-peace-400 pt-8 pb-14 w-full">
        {/* Vertical line design */}
        <div className="h-2 w-8 mb-8 rounded bg-gradient-to-t from-crusta-700 to-crusta-400" />
        <h1 className="text-xl md:text-3xl text-white font-extrabold tracking-tight">
          Choose Your Category
        </h1>

        <div className="grid w-[90%] max-w-7xl flex-wrap my-10 gap-10 lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
          <div className="flex justify-center items-center rounded-lg w-full h-16 bg-gradient-to-t from-crusta-400 to-crusta-700">
            History
          </div>
          <div className="flex justify-center items-center rounded-lg w-full h-16 border-[2px] hover:border-crusta-900 hover:text-crusta-950 border-crusta-500 text-crusta-500 hover:bg-gradient-to-t from-crusta-400 to-crusta-700">
            War
          </div>
          <div className="flex justify-center items-center rounded-lg w-full h-16 border-[2px] hover:border-crusta-900 hover:text-crusta-950 border-crusta-500 text-crusta-500 hover:bg-gradient-to-t from-crusta-400 to-crusta-700">
            Fiction
          </div>
          <div className="flex justify-center items-center rounded-lg w-full h-16 border-[2px] hover:border-crusta-900 hover:text-crusta-950 border-crusta-500 text-crusta-500 hover:bg-gradient-to-t from-crusta-400 to-crusta-700">
            Educational
          </div>
          <div className="flex justify-center items-center rounded-lg w-full h-16 border-[2px] hover:border-crusta-900 hover:text-crusta-950 border-crusta-500 text-crusta-500 hover:bg-gradient-to-t from-crusta-400 to-crusta-700">
            Fantasy
          </div>
          <div className="flex justify-center items-center rounded-lg w-full h-16 border-[2px] hover:border-crusta-900 hover:text-crusta-950 border-crusta-500 text-crusta-500 hover:bg-gradient-to-t from-crusta-400 to-crusta-700">
            Romantic
          </div>
          <div className="flex justify-center items-center rounded-lg w-full h-16 border-[2px] hover:border-crusta-900 hover:text-crusta-950 border-crusta-500 text-crusta-500 hover:bg-gradient-to-t from-crusta-400 to-crusta-700">
            Poetry
          </div>
          <div className="flex justify-center items-center rounded-lg w-full h-16 border-[2px] hover:border-crusta-900 hover:text-crusta-950 border-crusta-500 text-crusta-500 hover:bg-gradient-to-t from-crusta-400 to-crusta-700">
            Non fiction
          </div>
          <div className="flex justify-center items-center rounded-lg w-full h-16 border-[2px] hover:border-crusta-900 hover:text-crusta-950 border-crusta-500 text-crusta-500 hover:bg-gradient-to-t from-crusta-400 to-crusta-700">
            Drama
          </div>
          <div className="flex justify-center items-center rounded-lg w-full h-16 border-[2px] hover:border-crusta-900 hover:text-crusta-950 border-crusta-500 text-crusta-500 hover:bg-gradient-to-t from-crusta-400 to-crusta-700">
            Religion
          </div>
        </div>

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

      {/* Top writers */}
      <div className="flex flex-col items-center bg-crusta-950 pt-8 pb-14 w-full">
        {/* Vertical line design */}
        <div className="h-2 w-8 mb-8 rounded bg-gradient-to-t from-crusta-700 to-crusta-400" />
        <h1 className="text-xl md:text-3xl text-white font-extrabold tracking-tighter">
          Top Writers
        </h1>

        <div className="flex flex-wrap justify-center gap-10 lg:gap-14 max-w-7xl w-[90%] my-9 px-10 md:px-20">
          <WriterCard />
          <WriterCard1 />
          <WriterCard2 />
        </div>
      </div>
    </main>
  );
}
