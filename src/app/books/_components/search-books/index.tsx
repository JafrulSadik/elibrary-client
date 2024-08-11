"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Pagination from "../../../../components/pagination";
import { getBooks } from "../../../action";
import AllBooks from "../all-books";
import FilterSect from "../filter";
import SideBar from "../side-bar";

const SearchBooks = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const baseUrl = useRouter();

  // const sortBy = searchParams.get("searchBy") && "";
  // const sortType = searchParams.get("searchType") && "";
  // const s = searchParams.get("s") && "";
  // const page = searchParams.get("page") && 1;

  console.log({ baseUrl });

  const handleSortBy = (props: string) => {
    // rou
  };

  const handleSortType = (props: string) => {
    // setSortType(props);
  };

  const fetchData = async () => {
    // setLoading(true);
    const response = await getBooks();

    // const { data, pagination } = response;
    // setData(data);
    // setTotalPage(pagination.totalPage);
    // setLoading(false);
  };

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col max-w-7xl w-[90%] mb-10">
      <div className=" flex justify-between items-center text-base my-3">
        <FilterSect
          handleSortBy={handleSortBy}
          handleSortType={handleSortType}
        />
      </div>
      <div className="flex gap-3">
        {/* Sidebar */}
        <div className=" w-full hidden lg:block flex-[0.2]">
          <SideBar />
        </div>
        {/* All Books */}
        <div className="w-full lg:flex-[0.8] ">
          <AllBooks />
          <div className="flex justify-around mt-8">
            <Pagination
              pageCount={15}
              handlePageNumber={() => ""}
              pageRangeDisplayed={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBooks;
