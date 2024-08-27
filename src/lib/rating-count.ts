import { RatingCount } from "../types/Book";

type Props = {
  numOfUserRating: number;
  ratingCount: RatingCount[];
};

type DataType = {
  [key: number]: {
    count: number;
    percentage: number;
  };
};

export const ratingCount = (props: Props) => {
  const { numOfUserRating, ratingCount } = props;
  let data: DataType = {};

  ratingCount?.map((rating) => {
    const percentage = Math.floor((rating.count / numOfUserRating) * 100);
    data[rating._id] = {
      count: rating.count,
      percentage,
    };
  });

  for (let index = 1; index <= 5; index++) {
    if (!data[index]) {
      data[index] = {
        count: 0,
        percentage: 0,
      };
    }
  }

  return data;
};
