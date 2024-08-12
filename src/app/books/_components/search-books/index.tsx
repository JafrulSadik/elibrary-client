"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Pagination from "../../../../components/pagination";
import { ApiSuccessfullResponse } from "../../../../types/ApiResponse";
import { Book, PaginationType } from "../../../../types/Book";
import { getBooks } from "../../../action";
import AllBooks from "../all-books";
import FilterSect from "../filter";
import SideBar from "../side-bar";
let count = 0;

const SearchBooks = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [page, setPage] = useState(1);
  const [data, setData] = useState<Book[]>([]);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSortBy = (sortby: string) => {
    const params = new URLSearchParams(searchParams);
    if (sortby) {
      params.set("sort_by", sortby);
    } else {
      params.delete("sort_by");
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleSortType = (sortType: string) => {
    const params = new URLSearchParams(searchParams);
    if (sortType) {
      params.set("sort_type", sortType);
    } else {
      params.delete("sort_type");
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  const handlePageNumber = (props: { selected: number }) => {
    const page = props.selected + 1;
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  const fetchData = async (searchUrl: string) => {
    setLoading(true);
    const response = (await getBooks({ searchUrl })) as ApiSuccessfullResponse<
      Book,
      PaginationType
    >;

    const { data, pagination } = response;
    setData(data);
    setTotalPage(pagination.totalPage);
    setLoading(false);
  };

  useEffect(() => {
    const searchQuery = window.location.search;
    fetchData(searchQuery);
  }, [searchParams]);

  return (
    <div className="flex flex-col max-w-7xl w-[90%] mb-10">
      <div className=" flex justify-between items-center text-base my-3">
        <FilterSect
          handleSortBy={handleSortBy}
          handleSortType={handleSortType}
          sortBy={searchParams.get("sort_by")}
          sortType={searchParams.get("sort_type")}
          booksCount={data.length}
          search={searchParams.get("search")}
        />
      </div>
      <div className="flex gap-3">
        {/* Sidebar */}
        <div className=" w-full hidden lg:block flex-[0.2]">
          <SideBar />
        </div>
        {/* All Books */}
        <div className="w-full lg:flex-[0.8] ">
          <AllBooks books={data} />

          {/* Pagination */}
          <div className="flex justify-around mt-8">
            <Pagination
              pageCount={totalPage}
              handlePageNumber={handlePageNumber}
              pageRangeDisplayed={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBooks;
