"use client";
import { useState } from "react";
import useDebounce from "../../../../../../hooks/useDebounce";
import BookSearch from "../book-search/BookSearch";
import DataTable from "../data-table";

type SearchByT = "title" | "bookId" | "genre";

const BooksDataTable = () => {
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState<SearchByT>("title");
  const debouncedValue = useDebounce(search);

  const handleSearchBy = (searchBy: SearchByT) => {
    setSearchBy(searchBy);
    console.log(searchBy);
  };
  const handleSearch = (search: string) => {
    setSearch(search);
  };

  return (
    <>
      <BookSearch handleSearch={handleSearch} handleSearchBy={handleSearchBy} />
      <div className="w-full">
        <DataTable search={debouncedValue} searchBy={searchBy} />
      </div>
    </>
  );
};

export default BooksDataTable;
