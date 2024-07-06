import Image from "next/image";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import CoverImg from "../../public/images/books/Stay with me.jpg";

const Card = () => {
  return (
    <div className="flex flex-col bg-white rounded-lg  w-[180px] h-[260px] shadow-md border-x border-x-gray-200 ">
      {/* Image div */}
      <div className="w-full">
        <div className="overflow-hidden relative flex justify-center rounded-md">
          <Image
            src={CoverImg}
            alt=""
            className=" object-conver blur-2xl w-[100px] "
          />
          <Image src={CoverImg} alt="" className="absolute w-[100px] z-20 " />
        </div>
      </div>

      {/* Others */}
      <div className="text-sm mx-4 my-2 gap-3">
        <h1 className="font-bold text-black">Stay With Me</h1>
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

export default Card;
