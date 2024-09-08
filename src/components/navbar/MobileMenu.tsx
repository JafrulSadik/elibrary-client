"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import NoProfilePic from "../../assets/Images/ProfileImg/image.png";
import Logo from "./../../assets/Images/Logo/logo.png";

const MobileMenu = ({ user }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);

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
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="logo.png"
            height="0"
            width="0"
            className="h-6 w-5"
          />
          <span className=" text-crusta-500 font-light">E-LIBRERY</span>
        </Link>

        {/* login */}
        <div>
          {user ? (
            <div className="" onClick={() => setIsOpenProfile((prev) => !prev)}>
              {/* <Link href="">
              <FaBookBookmark size={20} />
            </Link> */}
              <Image
                src={user?.profileImg ? user?.profileImg : NoProfilePic}
                className="rounded-full border border-crusta-350 h-8 w-8"
                height={200}
                width={200}
                alt="profile.jpg"
              />
            </div>
          ) : (
            <Link
              href="/login"
              type="submit"
              className="px-3 py-1 hover:text-white rounded-md text-[12px] hover:bg-gradient-to-b hover:from-crusta-500 hover:to-crusta-600 bg-none text-crusta-600 border border-crusta-600"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 top-16 w-full h-[calc(100vh-64px)] bg-[#ffffffb1] backdrop-blur-md flex flex-col items-center justify-center gap-8 font-normal text-base  z-30">
          <Link href="/">Home</Link>
          <Link href="/">Category</Link>
          <Link href="/">Your Books</Link>
          <Link href="/">Favorite</Link>
          <Link href="/">Login</Link>
        </div>
      )}

      {isOpenProfile && (
        <div className="absolute flex right-0 top-0 h-screen w-full items-center justify-center font-normal text-base transition-all ease-in-out duration-1000 z-30">
          <div
            className="h-screen bg-crusta-950 opacity-60 flex-[0.3]"
            onClick={() => setIsOpenProfile((prev) => !prev)}
          />

          <div className="h-screen  bg-white flex-[0.7]">
            <div className="flex justify-between h-16 px-4 items-center  border-b-2 border-gray-200">
              <div className="flex gap-4 items-center">
                <Image
                  src={user.profileImg ? user.profileImg : NoProfilePic}
                  className="h-8 w-8 object-cover rounded-full"
                  height={200}
                  width={200}
                  alt="profile.jpg"
                />

                <p className="text-crusta-950 font-medium">{user.name}</p>
              </div>

              <RxCross2
                size={20}
                className="text-crusta-950"
                onClick={() => setIsOpenProfile((prev) => !prev)}
              />
            </div>

            <div className=" text-crusta-950 font-medium py-3 px-8 ">
              <Link href="/dashboard" className="">
                Profile
              </Link>
            </div>
            <div className=" text-crusta-950 font-medium py-3 px-8 ">
              <Link href="/dashboard/favourite-books" className="">
                Favourite
              </Link>
            </div>
            <div className=" text-crusta-950 font-medium py-3 px-8 ">
              <Link href="/dashboard/my-books" className="">
                My Books
              </Link>
            </div>
            <div className=" text-crusta-950 font-medium py-3 px-8 ">
              <Link href="/dashboard/add-book" className="">
                Add Book
              </Link>
            </div>

            <div className="px-2 my-4">
              <button className="p-1 bg-peace-400 hover:bg-gray-800 text-white w-full rounded-md">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
