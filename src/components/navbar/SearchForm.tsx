"use client";

import { useState } from "react";
import SearchIcon from "../../../public/icons/search-icon";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  return (
    <form action="" className="flex w-full pl-5 bg-soft-peach-100 rounded-md">
      <input
        type="text"
        value={search}
        className="w-full h-10 font-normal text-[14px] outline-none bg-soft-peach-100"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
      <button type="submit" className="px-3">
        <SearchIcon className="fill-crusta-400" />
      </button>
    </form>
  );
};

export default SearchForm;
