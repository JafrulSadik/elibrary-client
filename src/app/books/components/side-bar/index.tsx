import Link from "next/link";
import { FaRegStar, FaStar } from "react-icons/fa6";

const SideBar = () => {
  return (
    <div className=" p-5 rounded-md border border-gray-300 mb-14">
      {/* Popular Cateogry */}
      <div className="">
        <h1 className="text-center text-sm font-semibold my-2">
          Popular Category
        </h1>
        <hr className="bg-gray-300 h-[0.5px] my-1" />
        <div className="text-sm">
          <div>
            <div className="flex items-center px-3 gap-2 py-1">
              <input type="checkbox" className="accent-peace-400 " />
              <Link href="">Novel</Link>
            </div>
            <hr className="bg-gray-300 h-[0.5px] my-1" />
          </div>
          <div>
            <div className="flex items-center px-3 gap-2 py-1">
              <input type="checkbox" className="accent-peace-400 " />
              <Link href="">Fiction</Link>
            </div>
            <hr className="bg-gray-300 h-[0.5px] my-1" />
          </div>
          <div>
            <div className="flex items-center px-3 gap-2 py-1">
              <input type="checkbox" className="accent-peace-400 " />
              <Link href="">Drama</Link>
            </div>
            <hr className="bg-gray-300 h-[0.5px] my-1" />
          </div>
          <div>
            <div className="flex items-center px-3 gap-2 py-1">
              <input type="checkbox" className="accent-peace-400 " />
              <Link href="">Children's Book</Link>
            </div>
            <hr className="bg-gray-300 h-[0.5px] my-1" />
          </div>
          <div>
            <div className="flex items-center px-3 gap-2 py-1">
              <input type="checkbox" className="accent-peace-400 " />
              <Link href="">Novel</Link>
            </div>
            <hr className="bg-gray-300 h-[0.5px] my-1" />
          </div>
        </div>
      </div>

      {/* Top Writers */}
      <div>
        <h1 className="text-center text-sm font-semibold my-2">Best Writers</h1>
        <hr className="bg-gray-300 h-[0.5px] my-1" />
        <div className="text-sm">
          <div>
            <div className="flex items-center px-3 gap-2 py-1">
              <input type="checkbox" className="accent-peace-400 " />
              <Link href="">Symon Alex</Link>
            </div>
            <hr className="bg-gray-300 h-[0.5px] my-1" />
          </div>
          <div>
            <div className="flex items-center px-3 gap-2 py-1">
              <input type="checkbox" className="accent-peace-400 " />
              <Link href="">Nitesh Rahman</Link>
            </div>
            <hr className="bg-gray-300 h-[0.5px] my-1" />
          </div>
          <div>
            <div className="flex items-center px-3 gap-2 py-1">
              <input type="checkbox" className="accent-peace-400 " />
              <Link href="">Tanvir Mahmood</Link>
            </div>
            <hr className="bg-gray-300 h-[0.5px] my-1" />
          </div>
          <div>
            <div className="flex items-center px-3 gap-2 py-1">
              <input type="checkbox" className="accent-peace-400 " />
              <Link href="">Humayun Ahmed</Link>
            </div>
            <hr className="bg-gray-300 h-[0.5px] my-1" />
          </div>
          <div>
            <div className="flex items-center px-3 gap-2 py-1">
              <input type="checkbox" className="accent-peace-400 " />
              <Link href="">Arif Azad</Link>
            </div>
            <hr className="bg-gray-300 h-[0.5px] my-1" />
          </div>
        </div>
      </div>

      {/* Ratings */}
      <div>
        <h1 className="text-center text-sm font-semibold my-2">
          Rating Filter
        </h1>
        <hr className="bg-gray-300 h-[0.5px] my-1" />
        <div className="text-sm">
          <div>
            <div className="flex items-center px-3 gap-2 py-1">
              <input type="checkbox" className="accent-peace-400 " />
              <div className="flex text-crusta-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <hr className="bg-gray-300 h-[0.5px] my-1" />
          </div>
          <div>
            <div className="flex items-center px-3 gap-2 py-1">
              <input type="checkbox" className="accent-peace-400 " />
              <div className="flex text-crusta-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
            </div>
            <hr className="bg-gray-300 h-[0.5px] my-1" />
          </div>
          <div>
            <div className="flex items-center px-3 gap-2 py-1">
              <input type="checkbox" className="accent-peace-400 " />
              <div className="flex text-crusta-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
              </div>
            </div>
            <hr className="bg-gray-300 h-[0.5px] my-1" />
          </div>
          <div>
            <div className="flex items-center px-3 gap-2 py-1">
              <input type="checkbox" className="accent-peace-400 " />
              <div className="flex text-crusta-400">
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
            </div>
            <hr className="bg-gray-300 h-[0.5px] my-1" />
          </div>
          <div>
            <div className="flex items-center px-3 gap-2 py-1">
              <input type="checkbox" className="accent-peace-400 " />
              <div className="flex text-crusta-400">
                <FaStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
            </div>
            <hr className="bg-gray-300 h-[0.5px] my-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
