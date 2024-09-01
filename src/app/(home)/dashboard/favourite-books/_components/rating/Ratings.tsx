import { FaRegStar, FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

type Props = {
  totalRating: number;
  numOfRating: number;
};

const Ratings = (props: Props) => {
  const { totalRating, numOfRating } = props;

  const rating = totalRating / numOfRating;
  const intValue = Math.floor(rating);
  const floatValue = Math.ceil(rating % 1);
  const blankValue = Math.floor(5 - rating);

  if (!rating) {
    return (
      <div className="flex text-yellow-300 md:gap-1">
        {Array(5)
          .fill(0)
          .map((star, index) => (
            <FaRegStar key={index} className="size-3" />
          ))}
      </div>
    );
  }

  return (
    <div className="flex text-yellow-500 md:gap-1">
      {intValue
        ? Array(intValue)
            .fill(0)
            .map((star, index) => <FaStar className="size-3" key={index} />)
        : ""}
      {floatValue ? <FaStarHalfStroke className="size-3" /> : ""}
      {blankValue
        ? Array(blankValue)
            .fill(0)
            .map((star, index) => <FaRegStar key={index} className="size-3" />)
        : ""}
    </div>
  );
};

export default Ratings;
