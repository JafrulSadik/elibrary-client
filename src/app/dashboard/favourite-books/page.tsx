"use client";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import Pagination from "../../../components/pagination";
import BookCard from "./_components/book-card";

const page = () => {
  return (
    <div className="flex flex-col items-center p-8 rounded-md border bg-white border-gray-300 md:min-h-[100vh]">
      <div className="flex flex-col w-full mx-2 font-semibold text-left">
        <div className="flex text-sm items-center my-1 md:my-0">
          <Link href="/dashboard/">Dashboard</Link>
          {<MdKeyboardArrowRight size={15} />}
          <Link href={"/dashboard/my-books"} className="font-normal">
            Favourite
          </Link>
        </div>
      </div>

      <hr className="h-[0.5] my-3 bg-gray-300 w-full" />

      <div className="flex flex-col gap-3 w-full">
        {[...Array(5).fill(0)].map((item, index) => (
          <BookCard key={index} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Pagination
          handlePageNumber={() => ""}
          pageCount={20}
          pageRangeDisplayed={3}
        />
      </div>
    </div>
  );
};

export default page;
