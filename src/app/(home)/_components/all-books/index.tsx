"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../../../../components/card";
import HomeCardSkeleton from "../../../../skeletons/home-card-skeleton/HomeCardSkeleton";
import { ApiSuccessfullResponse } from "../../../../types/ApiResponse";
import { Book, PaginationType } from "../../../../types/Book";
import { getBooks } from "../../../action/book-action";

const breakPoints = {
  320: {
    slidesPerView: 2,
  },
  500: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  860: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
  1200: {
    slidesPerView: 5,
    spaceBetween: 30,
  },
};

const AllBooks = () => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    setLoading(true);
    const response = (await getBooks({
      searchUrl: "?limit=5",
    })) as ApiSuccessfullResponse<Book, PaginationType>;
    setBooks(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="flex flex-col w-full items-center justify-center gap-10 ">
      {/* Category wize books */}
      <div className="flex flex-col bg-gradient-to-t from-crusta-700 to-crusta-400  gap-4 md:gap-8 py-8 md:py-12 px-6 md:px-16 min-h-36 w-full bg-white rounded-lg">
        <div className="flex text-white justify-between">
          <h1 className="text-sm md:text-base font-bold">All Books</h1>
          <Link href="">Show More</Link>
        </div>
        {loading ? (
          <>
            {/* <div className="flex justify-center items-center h-64">
            <p>Loading...</p>
          </div> */}
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
                  860: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                  1200: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                }}
                spaceBetween={5}
              >
                {Array(5)
                  .fill(0)
                  .map((item, index) => (
                    <SwiperSlide className="md:px-5" key={index}>
                      <HomeCardSkeleton />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </>
        ) : books.length ? (
          <div className="w-full">
            <Swiper
              slidesPerView={1}
              breakpoints={breakPoints}
              spaceBetween={5}
            >
              {books?.map((book) => (
                <SwiperSlide className="px-1" key={book._id}>
                  <Card book={book} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="flex justify-center items-center h-64">
            <p>No books found!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBooks;
