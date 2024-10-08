import Image from "next/image";
import Link from "next/link";
import { Book } from "../../types/Book";
import Ratings from "../ratings/Ratings";

type Props = {
  book: Book;
};

const Card = (props: Props) => {
  const { book } = props;

  return (
    <div className="flex flex-col  bg-white rounded-md w-full max-w-36  md:max-w-40 md:h-64 shadow-md">
      {/* Image div */}
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
          className="w-[60%]  z-20 object-contain"
        />
      </div>

      {/* Others */}
      <div className="flex flex-col my-3 text-xs md:text-sm px-2 md:px-4">
        <div className="w-full">
          <div className="truncate">
            <Link
              href={`/books/${book?._id}`}
              className="text-sm font-bold text-black"
            >
              {book?.title}
            </Link>
          </div>
          <p className="font-normal text-gray-400">{book?.genre?.title}</p>
          <p className="font-light text-green-500">
            Downloads ({book?.downloads})
          </p>
          <Ratings
            numOfRating={book?.numOfRating}
            totalRating={book?.totalRating}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
