import AllBooks from "./components/all-books";
import FilterSect from "./components/filter";
import SideBar from "./components/side-bar";

const page = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col max-w-7xl w-[90%] mb-10">
        <div className="h-10 flex justify-between items-center text-base my-3">
          <FilterSect />
        </div>
        <div className="flex gap-3">
          {/* Sidebar */}
          <div className=" w-full hidden lg:block flex-[0.2]">
            <SideBar />
          </div>
          {/* All Books */}
          <div className="w-full lg:flex-[0.8] ">
            <AllBooks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
