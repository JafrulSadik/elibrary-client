"use client";
import Image from "next/image";
import Link from "next/link";
import { BiBookAdd } from "react-icons/bi";
import { GrFavorite } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuBook } from "react-icons/lu";
import { MdOutlinePerson } from "react-icons/md";
import Profile from "./../../../public/images/user/writer-1.png";

const ProfileBtn = (props: { user: any }) => {
  const { user } = props;

  // const [dropDown, setDropDown] = useState(false);
  return (
    <div
      className="flex group gap-2 items-center relative cursor-pointer h-12"
      // onClick={() => setDropDown((prev) => !prev)}
    >
      <Image
        className="rounded-full border-2 border-crusta-300"
        src={Profile}
        height={30}
        width={30}
        alt="Profile"
      />
      <div className="flex">
        <span className="text-crusta-400 capitalize">{user?.name}</span>

        <span className="text-crusta-400 mt-1">
          <IoMdArrowDropdown size={20} />
        </span>
      </div>

      <div className="absolute hidden group-hover:block  text-base bg-white w-52 top-12 -right-1/2 rounded-md border border-gray-300 text-gray-900 py-2 z-30">
        <div className="flex items-center gap-2 py-2  px-4">
          <span className="w-6">
            <MdOutlinePerson size={22} />
          </span>
          <Link href="/dashboard">Profile</Link>
        </div>
        <div className="flex items-center gap-2 py-2 px-4">
          <span className="w-6">
            <GrFavorite />
          </span>
          <Link href="/dashboard/favourite-books">Favourite</Link>
        </div>
        <div className="flex items-center gap-2 py-2 px-4">
          <span className="w-6">
            <LuBook />
          </span>
          <Link href="/dashboard/my-books">My Books</Link>
        </div>
        <div className="flex items-center gap-2 py-2 px-4">
          <span className="w-6">
            <BiBookAdd />
          </span>
          <Link href="/dashboard/add-book">Add Book</Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileBtn;
