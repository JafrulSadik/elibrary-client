import { FaRegStar, FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

type Props = {
  totalRating: number;
  numOfRating: number;
  color?: string;
  size?: string;
  gap?: string;
};

const Ratings = (props: Props) => {
  const { totalRating, numOfRating, color, size, gap } = props;

  const rating = totalRating / numOfRating;
  const intValue = Math.floor(rating);
  const floatValue = Math.ceil(rating % 1);
  const blankValue = Math.floor(5 - rating);

  if (!rating) {
    return (
      <div
        className={`flex ${gap ? gap : "gap-1"} ${
          color ? color : "text-yellow-300"
        }`}
      >
        {Array(5)
          .fill(0)
          .map((star, index) => (
            <FaRegStar key={index} className={size ? size : "size-3"} />
          ))}
      </div>
    );
  }

  return (
    <div
      className={`flex ${gap ? gap : "gap-1"} ${
        color ? color : "text-yellow-300"
      }`}
    >
      {intValue
        ? Array(intValue)
            .fill(0)
            .map((star, index) => (
              <FaStar className={size ? size : "size-3"} key={index} />
            ))
        : ""}
      {floatValue ? (
        <FaStarHalfStroke className={size ? size : "size-3"} />
      ) : (
        ""
      )}
      {blankValue
        ? Array(blankValue)
            .fill(0)
            .map((star, index) => (
              <FaRegStar key={index} className={size ? size : "size-3"} />
            ))
        : ""}
    </div>
  );
};

export default Ratings;
