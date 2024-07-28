import Link from "next/link";
import { FaRegStar, FaStar } from "react-icons/fa6";
import WriterImgOne from "../../../../../../public/images/writers/writer-1";
import WriterImgTwo from "../../../../../../public/images/writers/writer-2";
import { auth } from "../../../../../lib/auth";
import AddReview from "../add-review";

const Reviews = async () => {
  const session = await auth();

  const isLoggedIn = !!session?.user;

  return (
    <div className="flex flex-col items-center max-w-7xl w-[90%] shadow-sm rounded-md pt-14 mb-10 border border-gray-200">
      <div className="w-[90%] flex flex-col">
        <h1 className="text-2xl text-center mb-4">Rating and Reviews</h1>
        {/* Total Rating and reviews*/}
        <div className="flex flex-col gap-3 md:flex-row rounded-md">
          {/* Ratings */}
          <div className="flex flex-1 justify-center items-center py-3">
            <div className="flex flex-col items-center">
              <div className="relative text-3xl">4.5 / 5.00</div>
              <h1>Out of 100 Reviews</h1>
            </div>
          </div>
          {/* Reviews */}
          <div className="flex flex-col flex-1 justify-center items-center gap-1">
            <div className="flex items-center gap-2">
              <div className="flex text-sm text-yellow-600 ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className="w-28 bg-gray-300 h-2 rounded">
                <div className="bg-yellow-600 w-[70%] h-2 rounded" />
              </div>

              <p className="text-xs w-8 ">70</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-sm text-yellow-600 ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>

              <div className="w-28 bg-gray-300 h-2 rounded">
                <div className="bg-yellow-600 w-[20%] h-2 rounded" />
              </div>

              <p className="text-xs w-8">20</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-sm text-yellow-600 ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
              </div>

              <div className="w-28 bg-gray-300 h-2 rounded">
                <div className="bg-yellow-600 w-[10%] h-2 rounded" />
              </div>

              <p className="text-xs w-8">10</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-sm text-yellow-600 ">
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>

              <div className="w-28 bg-gray-300 h-2 rounded">
                <div className="bg-yellow-600 w-[5%] h-2 rounded" />
              </div>

              <p className="text-xs w-8">5</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-sm text-yellow-600 ">
                <FaStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>

              <div className="w-28 bg-gray-300 h-2 rounded overflow-hidden">
                <div className="bg-yellow-600 w-[3%] h-2 rounded" />
              </div>

              <p className="text-xs w-8">3</p>
            </div>
          </div>
        </div>

        {/* Write a review */}
        <div className="flex w-full justify-center my-6">
          <AddReview isLoggedIn={isLoggedIn} />
        </div>

        <hr className="h-[0.5px] bg-gray-300 my-8" />

        {/* User Reviews */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <WriterImgTwo
              className="rounded-full border border-peace-400"
              height={40}
              width={40}
            />
            <div>
              <p className="text-sm">
                By <span>Tanvir Sayem</span> <span>20,Mar,2024</span>
              </p>
              <div className="flex text-xs text-yellow-600">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
          <div className="justify-normal">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            officia accusantium pariatur suscipit qui deserunt aspernatur earum
            quasi veniam? Molestias!
          </div>
        </div>

        <hr className="h-[0.5px] bg-gray-300 my-8" />

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <WriterImgOne
              className="rounded-full border border-peace-400"
              height={40}
              width={40}
            />
            <div>
              <p className="text-sm">
                By <span>Tanvir Sayem</span> <span>20,Mar,2024</span>
              </p>
              <div className="flex text-xs text-yellow-600">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
          <div className=" justify-normal">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime in,
            saepe soluta repudiandae animi voluptate voluptatem eveniet quas
            excepturi eaque numquam incidunt porro consequuntur ipsam tempore
            quibusdam corrupti totam aut.
          </div>
        </div>

        <hr className="h-[0.5px] bg-gray-300 mt-8" />
        <div className="flex justify-center mt-4">
          <Link
            href=""
            className="text-black hover:text-[#070707c4] pb-6 font-semibold"
          >
            Show more...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
