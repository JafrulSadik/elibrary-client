import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import BooksDataTable from "./_components/books-data-table/BooksDataTable";

const page = () => {
  return (
    <div className="flex flex-col items-center p-8 rounded-md border bg-white border-gray-300 min-h-[100vh]">
      <div className="flex flex-col w-full ml-2 font-semibold text-left">
        <div className="flex text-sm items-center">
          <Link href="/dashboard/">Dashboard</Link>
          {<MdKeyboardArrowRight size={15} />}
          <Link href={"/dashboard/my-books"} className="font-normal">
            My Books
          </Link>
        </div>
      </div>
      <hr className="w-full bg-black m-3" />
      <BooksDataTable />
    </div>
  );
};

export default page;
