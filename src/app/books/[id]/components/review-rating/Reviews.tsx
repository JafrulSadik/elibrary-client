import { auth } from "../../../../../lib/auth";
import AddReview from "../add-review";
import ReviewsCount from "../reviews-count";
import UserReviews from "../user-reviews";

type Props = {
  bookId: string;
  totalReviews: number;
};

const Reviews = async (props: Props) => {
  const session = await auth();

  const { bookId, totalReviews } = props;

  const isLoggedIn = !!session?.user;

  return (
    <div className="flex flex-col items-center max-w-7xl w-[90%] shadow-sm rounded-md pt-14 mb-10 border border-gray-200">
      <div className="w-[90%] flex flex-col">
        <h1 className="text-2xl text-center mb-4">Rating and Reviews</h1>
        {/* Total Rating and reviews*/}
        <ReviewsCount />

        {/* Write a review */}
        <div className="flex w-full justify-center my-6">
          <AddReview isLoggedIn={isLoggedIn} bookId={bookId} />
        </div>

        <hr className="h-[0.5px] bg-gray-300 my-8" />

        {/* User Reviews */}
        <UserReviews bookId={bookId} totalReviews={totalReviews} />
      </div>
    </div>
  );
};

export default Reviews;
