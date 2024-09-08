import Image from "next/image";
import Link from "next/link";
import { Book } from "../../../../../types/Book";
import Ratings from "../rating/Rating";

type Props = {
  book: Book;
};

const AllBooksCard = (props: Props) => {
  const { book } = props;

  return (
    <div className="max-h-64 bg-white rounded-lg max-w-[160px] shadow-md border-x border-x-gray-200 ">
      {/* Image div */}
      <div className="flex-[0.5]">
        <div className="overflow-hidden relative flex justify-center rounded-t-md">
          <Image
            src={book?.cover}
            alt=""
            height="0"
            width="0"
            className="absolute object-conver w-full blur-2xl "
          />
          <Image
            src={book?.cover}
            alt=""
            height={300}
            width={300}
            className="w-[55%]  z-20 object-contain"
          />
        </div>
      </div>

      {/* Others */}
      <div className="flex flex-col text-sm mx-4 gap-1 py-2">
        <div className="truncate w-full">
          <Link href={`/books/${book?._id}`} className="font-bold text-black">
            {book?.title}
          </Link>
        </div>
        <p className="font-normal text-gray-400">{book?.author?.name}</p>
        <p className="font-light text-green-500 text-sm">
          Downloads ({book?.downloads})
        </p>
        <Ratings
          numOfRating={book.numOfRating}
          totalRating={book.totalRating}
        />
      </div>
    </div>
  );
};

export default AllBooksCard;
