import { FaRegStar, FaStar } from "react-icons/fa";

const ReviewsCount = () => {
  return (
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
  );
};

export default ReviewsCount;
