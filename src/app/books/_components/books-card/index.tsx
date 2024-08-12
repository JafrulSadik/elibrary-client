import Image from "next/image";
import Link from "next/link";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Book } from "../../../../types/Book";

type Props = {
  book: Book;
};

const AllBooksCard = (props: Props) => {
  const { book } = props;

  return (
    <div className="max-h-64 bg-white rounded-lg max-w-[160px] shadow-md border-x border-x-gray-200 ">
      {/* Image div */}
      <div className="w-full">
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
            height={100}
            width={60}
            className="w-[55%]  z-20 object-contain"
          />
        </div>
      </div>

      {/* Others */}
      <div className="text-sm mx-4 my-2 gap-3">
        <Link href="/books/1" className="font-bold text-black">
          {book?.title}
        </Link>
        <p className="font-normal text-gray-400">{book?.author?.name}</p>
        <p className="font-light text-green-500 text-sm">
          Downloads ({book?.downloads})
        </p>
        <div className="flex gap-1 text-yellow-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
      </div>
    </div>
  );
};

export default AllBooksCard;
