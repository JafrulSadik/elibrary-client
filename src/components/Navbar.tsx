"use-client";

import MobileMenu from "./MobileMenu";
import SearchForm from "./SearchForm";

const Navbar = () => {
  const handleSubmit = () => {};
  return (
    <div className="flex justify-center w-full bg-crusta-950 ">
      <div className="hidden max-w-7xl w-[90%]  md:flex container justify-between items-center h-24">
        {/* Left Section */}
        <div className="flex-1">
          <h1 className=" text-crusta-500 text-[16px]  font-bold text-lg ">
            e-library
          </h1>
        </div>

        {/* Middle Section */}
        <div className="hidden md:block flex-1 ">
          <SearchForm />
        </div>

        {/* Right Section */}
        <div className="flex justify-end flex-1  gap-2">
          <button
            type="submit"
            className="px-6 h-10 font-normal text-crusta-400 hover:border border-crusta-400 rounded-md"
          >
            Login
          </button>
          <button
            type="submit"
            className="px-6 h-10 text-white rounded-md font-normal bg-gradient-to-b from-crusta-500 to-crusta-600 hover:bg-none hover:text-crusta-600 hover:border border-crusta-600"
          >
            Register
          </button>
        </div>
      </div>

      <div className="h-16 w-full md:hidden">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
