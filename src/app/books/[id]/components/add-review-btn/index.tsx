"use client";

import { MdRateReview } from "react-icons/md";

type Props = {
  setReviewModal: Function;
};

const AddReviewButton = (props: Props) => {
  const { setReviewModal } = props;

  const handleClick = () => {
    setReviewModal((prev: boolean) => !prev);
  };

  return (
    <button
      className="flex justify-center items-center text-white gap-2 bg-crusta-500 rounded-md h-10 w-48 p-4"
      onClick={handleClick}
    >
      <MdRateReview className="mt-1" />
      Write a review
    </button>
  );
};

export default AddReviewButton;
