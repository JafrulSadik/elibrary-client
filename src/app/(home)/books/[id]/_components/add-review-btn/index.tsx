"use client";

import { useRouter } from "next/navigation";
import { MdRateReview } from "react-icons/md";

type Props = {
  handleReviewModal: Function;
  isLoggedIn: boolean;
};

const AddReviewButton = (props: Props) => {
  const { handleReviewModal, isLoggedIn } = props;

  const router = useRouter();

  const handleRouteBtn = () => {
    if (isLoggedIn) {
      handleReviewModal();
    } else {
      router.push("/login");
    }
  };

  return (
    <button
      className="flex justify-center items-center text-white gap-2 bg-crusta-500 rounded-md h-10 w-48 p-4"
      onClick={handleRouteBtn}
    >
      <MdRateReview className="mt-1" />
      Write a review
    </button>
  );
};

export default AddReviewButton;
