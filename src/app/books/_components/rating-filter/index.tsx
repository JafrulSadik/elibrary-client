import { FaRegStar, FaStar } from "react-icons/fa";

const RatingFilter = () => {
  return (
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
  );
};

export default RatingFilter;
