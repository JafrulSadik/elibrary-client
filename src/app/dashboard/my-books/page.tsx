import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import DataTable from "./_components/data-table";

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
      <div className="my-4 w-full flex justify-between">
        <input
          className="text-xs md:text-sm px-2 md:px-4 py-2 rounded-md w-[30%] md:w-[40%] border border-gray-300 outline-none"
          type="text"
          placeholder="Search"
        />
        <div className="flex items-center gap-2 text-xs md:text-sm">
          <p>Search by :</p>
          <select
            name=""
            id=""
            className="px-4 py-2 rounded-md border border-gray-300 outline-none"
          >
            <option value={0}>Title</option>
            <option value={1}>Email</option>
            <option value={2}>Genre</option>
          </select>
        </div>
      </div>
      <div className="w-full">
        <DataTable />
      </div>
    </div>
  );
};

export default page;
