"use client";
import WriterMocImage from "../../../../../../../public/images/writers/no-image";
import WriterImgTwo from "../../../../../../../public/images/writers/writer-2";
import useBookReviews from "../../../../../../hooks/useReviewsData";
import { dateFormat } from "../../../../../../lib/date-format";
import Ratings from "../ratings";

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
          const dateString = review.createdAt;
          const date = dateFormat({ dateString });
          return (
            <div key={index}>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  {true ? (
                    <WriterMocImage
                      className="rounded-full border border-peace-400"
                      height={40}
                      width={40}
                    />
                  ) : (
                    <WriterImgTwo
                      className="rounded-full border border-peace-400"
                      height={40}
                      width={40}
                    />
                  )}
                  <div className="flex flex-col gap-1">
                    <p className="text-sm md:text-base">
                      By{" "}
                      <span className="font-semibold capitalize text-crusta-950">
                        {review.authorId.name}
                      </span>
                      {", "}
                      <span>{date}</span>
                    </p>
                    <div className="flex text-xs text-yellow-600">
                      <Ratings rating={review.rating ? review.rating : 0} />
                    </div>
                  </div>
                </div>
                <div className="justify-normal my-1">{review?.comment}</div>
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
