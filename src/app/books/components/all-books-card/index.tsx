import Image from "next/image";
import Link from "next/link";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import CoverImg from "../../../../../public/images/books/Stay with me.jpg";

const AllBooksCard = () => {
  return (
    <div className="flex flex-col bg-white rounded-lg max-w-[160px] md:h-64 shadow-md border-x border-x-gray-200 ">
      {/* Image div */}
      <div className="w-full auto">
        <div className="overflow-hidden relative flex justify-center rounded-t-md">
          <Image
            src={CoverImg}
            alt=""
            className=" object-conver w-[60%] blur-2xl "
          />
          <Image src={CoverImg} alt="" className="absolute w-[60%]  z-20 " />
        </div>
      </div>

      {/* Others */}
      <div className="text-sm mx-4 my-2 gap-3">
        <Link href="/books/1" className="font-bold text-black">
          Stay With Me
        </Link>
        <p className="font-normal text-gray-400">Symon Alex</p>
        <p className="font-light text-green-500">Free</p>
        <div className="flex gap-1 text-yellow-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
      </div>
    </div>
  );
};

export default AllBooksCard;
