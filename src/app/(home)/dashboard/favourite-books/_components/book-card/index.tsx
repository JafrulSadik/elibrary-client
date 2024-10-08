import Image from "next/image";
import Link from "next/link";
import { Book } from "../../../../../../types/Book";
import Remove from "../../../_components/remove";
import Ratings from "../rating/Ratings";

type Props = {
  book: Book;
};

const BookCard = (props: Props) => {
  const { book } = props;

  return (
    <div className="w-full flex gap-3 md:gap-5 items-center p-3 md:px-6 md:py-3 rounded-md shadow-sm border border-gray-300 ">
      <div className="flex items-center gap-5 md:gap-5 min-w-16 h-full">
        <Image
          src={book?.cover}
          alt="Book Image"
          height="0"
          width="80"
          quality={100}
          className="rounded-sm w-full"
        />
      </div>

      <div className="flex flex-wrap justify-between gap-2 w-full">
        <div className="flex flex-col  gap-1 ">
          <p className="font-semibold text-sm md:text-base">{book?.title}</p>
          <Link
            href={`/books/${book._id}`}
            className="font-light md:font-normal text-xs md:text-sm text-crusta-400"
          >
            {book?.genre?.title}
          </Link>
          <Ratings
            totalRating={book.totalRating}
            numOfRating={book.numOfRating}
          />
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          <Remove bookId={book._id} />
          <Link
            href={`/reader/${book._id}`}
            className="w-14 py-1 lg:py-2 md:w-24 text-center  rounded-md text-white text-xs md:text-sm shadow-md bg-crusta-950 hover:bg-crusta-900"
          >
            Read
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
