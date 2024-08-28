import { FaRegStar, FaStar } from "react-icons/fa";
import { ratingCount } from "../../../../../lib/rating-count";
import { countReviews, getBooksById } from "../../../../action/book-action";

type Props = {
  id: string;
};

const ReviewsCount = async (props: Props) => {
  const { id } = props;

  const booksData = await getBooksById({ id });
  const { totalRating, numOfRating } = booksData.data;

  const rating = totalRating / numOfRating;

  const response = await countReviews({ bookId: id });

  const { data } = response;

  const allRatings = ratingCount({
    numOfUserRating: numOfRating,
    ratingCount: data,
  });

  return (
    <div className="flex flex-col gap-3 md:flex-row rounded-md">
      {/* Ratings */}
      <div className="flex flex-1 justify-center items-center py-3">
        <div className="flex flex-col items-center">
          <div className="relative text-3xl">
            {rating ? rating.toPrecision(2) : 0} / {rating ? 5.0 : 0}
          </div>
          <h1>Out of {numOfRating} Reviews</h1>
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
            <div
              className={`bg-yellow-600 w-[${allRatings[5]?.percentage}%] h-2 rounded`}
            />
          </div>

          <p className="text-xs w-8 ">{allRatings[5]?.count}</p>
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
            <div
              className={`bg-yellow-600 w-[${allRatings[4]?.percentage}%] h-2 rounded`}
            />
          </div>

          <p className="text-xs w-8">{allRatings[4]?.count}</p>
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
            <div
              className={`bg-yellow-600 w-[${allRatings[3]?.percentage}%] h-2 rounded`}
            />
          </div>

          <p className="text-xs w-8">{allRatings[3]?.count}</p>
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
            <div
              className={`bg-yellow-600 w-[${allRatings[2]?.percentage}%] h-2 rounded`}
            />
          </div>

          <p className="text-xs w-8">{allRatings[2]?.count}</p>
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
            <div
              className={`bg-yellow-600 w-[${allRatings[1]?.percentage}%] h-2 rounded`}
            />
          </div>

          <p className="text-xs w-8">{allRatings[1]?.count}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCount;
