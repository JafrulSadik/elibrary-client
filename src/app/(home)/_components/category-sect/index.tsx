"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BiSolidCategory } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../../../../components/card";
import {
  ApiResponseArryData,
  ApiSuccessfullResponse,
} from "../../../../types/ApiResponse";
import { Book, PaginationType } from "../../../../types/Book";
import { Genre } from "../../../../types/Genre";
import { getAllGenre, getBookByGenreId } from "../../../action/genre-action";
import Category from "../category";

type Props = {
  genre: Genre;
};

type SelectedGenre = {
  _id: string;
  title: string;
  code: number;
};

const CategorySect = () => {
  const [selectedGenre, setGenre] = useState<Genre>({
    _id: "",
    title: "",
    code: 0,
  });
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Genre[]>([]);
  const [books, setBooks] = useState<Book[]>([]);

  const handleSelect = (props: Props) => {
    const { genre } = props;
    setGenre(genre);
  };

  const fetchGenre = async () => {
    setLoading(true);
    const response = (await getAllGenre({
      queryString: "",
    })) as ApiResponseArryData<Genre>;
    setData(response.data);
    setGenre(response?.data[0]);
    setLoading(false);
  };

  const fetchBooksByGenre = async ({ genre }: { genre: Genre }) => {
    setLoading(true);
    const response = (await getBookByGenreId({
      genre,
    })) as ApiSuccessfullResponse<Book, PaginationType>;
    setBooks(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchGenre();
  }, []);

  useEffect(() => {
    if (selectedGenre?._id) {
      fetchBooksByGenre({ genre: selectedGenre });
    }
  }, [selectedGenre]);

  return (
    <div className="flex flex-col items-center bg-peace-400 pt-8 pb-14 w-full">
      {/* Vertical line design */}
      <div className="h-2 w-8 mb-8 rounded bg-gradient-to-t from-crusta-700 to-crusta-400" />
      <h1 className="text-xl md:text-3xl text-white font-extrabold tracking-tight">
        Choose Your Category
      </h1>

      <Category
        genres={data}
        handleSelect={handleSelect}
        selectedGenre={selectedGenre}
      />

      {/* Old Section */}
      <div className="max-w-7xl w-[95%] flex flex-col items-center justify-center gap-10">
        {/* Category wize books */}
        <div className="flex flex-col gap-4 md:gap-8 py-8 md:py-12 px-6 md:px-16 min-h-36 w-full rounded-lg bg-crusta-350">
          <div className="flex justify-between items-center">
            <div className="flex  text-black gap-2 items-center ">
              <div className=" text-crusta-950">
                <BiSolidCategory size={20} />
              </div>
              <h1 className="text-xs md:text-base font-bold text-crusta-950">
                {selectedGenre?.title}
              </h1>
            </div>
            <Link href="" className="text-xs md:text-base">
              Show More
            </Link>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <p>Loading...</p>
            </div>
          ) : books.length ? (
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
    </div>
  );
};

export default CategorySect;
