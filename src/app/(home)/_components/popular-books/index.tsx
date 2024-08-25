"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import StarIcon from "../../../../../public/icons/star/StarIcon";
import Card from "../../../../components/card";
import { ApiSuccessfullResponse } from "../../../../types/ApiResponse";
import { Book, PaginationType } from "../../../../types/Book";
import { getBooks } from "../../../action/book-action";

const PopularBooks = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    setLoading(true);
    const response = (await getBooks({
      searchUrl: "?sort_by=downloads&limit=5",
    })) as ApiSuccessfullResponse<Book, PaginationType>;
    setBooks(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="flex flex-col w-full items-center justify-center gap-10">
      {/* Category wize books */}
      <div className="flex flex-col bg-gradient-to-t from-crusta-300 to-crusta-100 gap-4 md:gap-8 py-8 md:py-12 px-6 md:px-16 min-h-36 w-full rounded-lg bg-white">
        <div className="flex text-black gap-2 items-center ">
          <div className=" text-crusta-400">
            <StarIcon />
          </div>
          <h1 className="text-sm md:text-base font-bold">Popular Books</h1>
        </div>

        {books.length ? (
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

export default PopularBooks;
