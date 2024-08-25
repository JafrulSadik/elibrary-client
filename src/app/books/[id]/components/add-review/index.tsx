"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { ImCross, ImSpinner2 } from "react-icons/im";
import { notify } from "../../../../../lib/notify";
import { AddReviewResponse } from "../../../../../types/ApiResponse";
import { Reviews } from "../../../../../types/Book";
import { addReview } from "../../../../action/book-action";
import AddReviewButton from "../add-review-btn";

type Props = {
  isLoggedIn: boolean;
  userId?: string;
  bookId: string;
};

const AddReview = (props: Props) => {
  const { isLoggedIn, bookId } = props;

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [reviewModal, setReviewModal] = useState(false);

  const handleReviewModal = () => {
    setReviewModal((prev) => !prev);
  };

  const handleReview = async () => {
    if (!review && !rating) {
      setError(true);
      setErrorMessage("* Review or rating is required.");
    } else {
      setLoading(true);
      const response = (await addReview({
        review,
        rating,
        bookId: bookId || "",
      })) as AddReviewResponse<Reviews>;

      if (response.code === 201) {
        notify({ message: "Review added successfully" });
        setLoading(false);
        setReviewModal(false);
      } else {
        setLoading(false);
        setError(true);
        setErrorMessage(response.message);
      }
    }
  };

  return (
    <div>
      <AddReviewButton
        handleReviewModal={handleReviewModal}
        isLoggedIn={isLoggedIn}
      />
      {reviewModal && (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center bg-[#291515bb] backdrop-blur-sm z-20">
          <form
            action={handleReview}
            className="flex flex-col bg-crusta-400 shadow-md justify-center  w-96 mx-6 rounded-md p-5 gap-4 relative"
          >
            <h1 className="text-lg text-[#ffffffb4] text-center rounded-md font-bold">
              Add Review
            </h1>
            <div className="flex justify-center text-3xl md:text-4xl  lg:text-5xl">
              {[...Array(5)].map((star, index) => (
                <FaStar
                  className={`${
                    index < rating ? "fill-yellow-300" : "fill-crusta-300"
                  }`}
                  onClick={() => setRating(index + 1)}
                  key={index}
                />
              ))}
            </div>
            <textarea
              name=""
              id=""
              placeholder="Enter you opinion"
              onChange={(e) => setReview(e.target.value)}
              className="rounded-md outline-none p-4 h-32 text-gray-800 scroll-m-0"
              maxLength={400}
            ></textarea>
            {error && (
              <p className="text-sm text-red-700 font-semibold">
                {errorMessage}
              </p>
            )}
            <button
              className="p-4 flex items-center justify-center gap-2 text-white bg-crusta-300 hover:bg-crusta-350 rounded-md"
              type="submit"
            >
              {loading && (
                <span className="animate-spin">
                  <ImSpinner2 size={18} />
                </span>
              )}
              <span>Submit</span>
            </button>

            <button
              className="absolute text-[#ffffffb4] top-7 right-5 text-base"
              onClick={() => setReviewModal((prev) => !prev)}
            >
              <ImCross />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddReview;
