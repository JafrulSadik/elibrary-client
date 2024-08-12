"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import SearchIcon from "../../../public/icons/search-icon";

const SearchForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchTerm = searchParams.get("search");
  const [search, setSearch] = useState(searchTerm || "");

  const handleSubmit = () => {
    const params = new URLSearchParams(searchParams);
    params.set("search", search);
    router.push(`/books?${params.toString()}`);
  };

  useEffect(() => {
    const searchTerm = searchParams.get("search");
    setSearch(searchTerm || "");
  }, [searchParams]);

  return (
    <form
      action={handleSubmit}
      className="flex w-full pl-5 bg-soft-peach-100 rounded-md"
    >
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
