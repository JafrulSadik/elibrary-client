import Image from "next/image";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import DownloadBtn from "../../../components/buttons/download-btn";
import PreviewBtn from "../../../components/buttons/preview-btn";
import { config } from "../../../config/config";
import { ApiResponseSingleData } from "../../../types/ApiResponse";
import { Book } from "../../../types/Book";
import BookSpec from "./components/book-spec";
import Reviews from "./components/review-rating/Reviews";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const response = await fetch(`${config.baseUrl}/api/v1/books/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Something went wrong...");
  }

  const data = (await response.json()) as ApiResponseSingleData<Book>;

  return (
    <div className="flex flex-col items-center bg-[#f5f5f5]">
      <div className="flex flex-col my-12 max-w-7xl w-[90%] shadow-sm rounded-md py-16 border border-gray-200">
        {/* Book Details */}
        <div className="flex flex-row flex-wrap gap-5 items-center w-full">
          {/* Imgae Sect */}
          <div className="flex flex-1 justify-center">
            <div className="overflow-hidden h-64 w-64  md:h-72 md:w-72 lg:h-96 lg:w-96 relative flex justify-center rounded-md border">
              <Image
                src={data?.data?.cover}
                alt=""
                width="0"
                height="0"
                className="object-conver blur-2xl w-full h-full"
              />
              <Image
                src={data.data.cover}
                alt=""
                width="100"
                height="100"
                quality={100}
                className="absolute object-contain  h-full z-20 w-full"
              />
            </div>
          </div>

          {/* Title Sect */}
          <div className="flex justify-center items-center md:items-start flex-col flex-1 w-64 gap-2 md:gap-3 lg:gap-">
            <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-crusta-950">
              {data.data.title}
            </h1>
            <p className=" text-base md:text-xl lg:text-2xl text-black font-normal">
              Writer : {data.data.author.name}
            </p>
            <p className="text-sm md:text-base lg:text-xl font-light text-black">
              Genre : {data.data.genre.title}
            </p>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex text-yellow-500 text-base md:text-xl lg:text-2xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <p className="text-xs md:text-sm lg:text-xl">
                {data.data.totalRating} | {data.data.numOfRating} reviews
              </p>
            </div>

            <PreviewBtn />
            <DownloadBtn />
          </div>
        </div>
      </div>

      {/* Specification others */}
      <BookSpec />

      {/* Reviews and others sect */}
      <Reviews />
    </div>
  );
};

export default page;
