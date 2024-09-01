import { FaRegStar, FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

type Props = {
  rating: number;
};

const Ratings = (props: Props) => {
  const { rating } = props;

  const intValue = Math.floor(rating);
  const floatValue = Math.ceil(rating % 1);
  const blankValue = Math.floor(5 - rating);

  if (!rating) {
    return (
      <div className="flex text-yellow-200">
        {Array(5)
          .fill(0)
          .map((star, index) => (
            <FaRegStar key={index} className="" />
          ))}
      </div>
    );
  }

  return (
    <div className="flex gap-1">
      {intValue
        ? Array(intValue)
            .fill(0)
            .map((star, index) => <FaStar key={index} />)
        : ""}
      {floatValue ? <FaStarHalfStroke /> : ""}
      {blankValue
        ? Array(blankValue)
            .fill(0)
            .map((star, index) => <FaRegStar key={index} />)
        : ""}
    </div>
  );
};

export default Ratings;
