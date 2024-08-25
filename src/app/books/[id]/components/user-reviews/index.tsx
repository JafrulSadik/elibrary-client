"use client";
import { FaStar } from "react-icons/fa";
import WriterImgTwo from "../../../../../../public/images/writers/writer-2";
import useBookReviews from "../../../../../hooks/useReviewsData";

type Props = {
  bookId: string;
  totalReviews: number;
};

const UserReviews = (props: Props) => {
  const { bookId, totalReviews } = props;
  const { reviews, loading, loadMoreReviews, hasMore } = useBookReviews({
    bookId,
    totalReviews,
  });

  return (
    <div>
      {reviews &&
        reviews.map((review, index) => {
          return (
            <div key={index}>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <WriterImgTwo
                    className="rounded-full border border-peace-400"
                    height={40}
                    width={40}
                  />
                  <div>
                    <p className="text-sm">
                      By <span>{review.authorId.name} </span>{" "}
                      <span>20,Mar,2024</span>
                    </p>
                    <div className="flex text-xs text-yellow-600">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <div className="justify-normal">{review?.comment}</div>
              </div>
              <hr className="h-[0.5px] bg-gray-300 my-4" />
            </div>
          );
        })}

      <div className="flex justify-center">
        {hasMore && (
          <button
            className="text-crusta-950 hover:text-crusta-700 pb-4 font-semibold"
            disabled={loading}
            onClick={loadMoreReviews}
          >
            Show more...
          </button>
        )}
      </div>
    </div>
  );
};

export default UserReviews;
