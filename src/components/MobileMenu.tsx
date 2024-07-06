"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../public/images/logo.png";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex relative h-full items-center justify-center">
      <div className="flex justify-between w-[80%] items-center">
        {/* Menubar */}
        <div
          className="flex flex-col gap-1"
          onClick={() => setIsOpen((prev: boolean) => !prev)}
        >
          <div
            className={`w-5 h-[2px] bg-crusta-500 rounded-sm ${
              isOpen ? "rotate-45" : ""
            } origin-left ease-in-out duration-500`}
          />
          <div
            className={`w-5 h-[2px] bg-crusta-500 rounded-sm ${
              isOpen ? "opacity-0" : ""
            } ease-in-out duration-500`}
          />
          <div
            className={`w-5 h-[2px] bg-crusta-500 rounded-sm ${
              isOpen ? "-rotate-45" : ""
            } origin-left ease-in-out duration-500`}
          />
        </div>

        {/* logo */}
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="logo.png" height={15} width={15} />
          <span className=" text-crusta-500 font-light">E-LIBRERY</span>
        </div>

        {/* login */}
        <div>
          <button
            type="submit"
            className="px-3 py-1 hover:text-white rounded-md text-[12px] hover:bg-gradient-to-b hover:from-crusta-500 hover:to-crusta-600 bg-none text-crusta-600 border border-crusta-600"
          >
            Login
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 top-16 w-full h-[calc(100vh-64px)] bg-[#ffffffb1] backdrop-blur-md flex flex-col items-center justify-center gap-8 font-normal text-base  z-10">
          <Link href="/">Home</Link>
          <Link href="/">Category</Link>
          <Link href="/">Your Books</Link>
          <Link href="/">Favorite</Link>
          <Link href="/">Login</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
