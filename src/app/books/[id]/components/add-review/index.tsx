"use client";

import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import AddReviewButton from "../add-review-btn";

type Props = {
  isLoggedIn: boolean;
};

const AddReview = (props: Props) => {
  const { isLoggedIn } = props;
  const [reviewModal, setReviewModal] = useState<boolean>(false);

  const handleReviewModal = () => {
    setReviewModal((prev) => !prev);
  };

  return (
    <div>
      <AddReviewButton
        handleReviewModal={handleReviewModal}
        isLoggedIn={isLoggedIn}
      />
      {reviewModal && (
        <div className=" fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center bg-[#291515bb] backdrop-blur-sm z-20">
          <div className="flex flex-col bg-crusta-400 shadow-md justify-center  w-96 mx-6 rounded-md p-5 gap-4 relative">
            <h1 className="text-lg text-[#ffffffb4] text-center rounded-md font-bold">
              Add Review
            </h1>
            <div className="flex justify-center text-3xl md:text-4xl  lg:text-5xl text-crusta-900">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
            <textarea
              name=""
              id=""
              placeholder="Enter you opinion"
              className="rounded-md outline-none p-4 h-32 text-gray-800 scroll-m-0"
              maxLength={400}
            ></textarea>
            <button
              className="p-4 text-white bg-crusta-300 hover:bg-crusta-350 rounded-md"
              onClick={() => setReviewModal((prev) => !prev)}
            >
              Submit
            </button>

            <button
              className="absolute text-[#ffffffb4] top-7 right-5 text-base"
              onClick={() => setReviewModal((prev) => !prev)}
            >
              <ImCross />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddReview;
