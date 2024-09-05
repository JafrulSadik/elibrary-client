import { Metadata } from "next";
import SearchBooks from "./_components/search-books";

export const metadata: Metadata = {
  title: "Books",
};

const page = () => {
  return (
    <div className="flex justify-center">
      <SearchBooks />
    </div>
  );
};

export default page;
