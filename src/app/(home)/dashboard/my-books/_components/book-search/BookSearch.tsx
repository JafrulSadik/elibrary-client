"use client";

type Props = {
  handleSearchBy: Function;
  handleSearch: Function;
};

const BookSearch = (props: Props) => {
  const { handleSearch, handleSearchBy } = props;

  return (
    <div className="my-4 w-full flex">
      <input
        className="text-xs md:text-sm px-2 md:px-4 py-2 rounded-md w-[30%] md:w-[40%] border border-gray-300 outline-none"
        type="text"
        placeholder="Search"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default BookSearch;
