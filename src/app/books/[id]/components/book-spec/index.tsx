import { Book } from "../../../../../types/Book";
import DescriptionSect from "../description-sect";

type Props = {
  book: Book;
};

const BookSpec = (props: Props) => {
  const { book } = props;
  return (
    <div className="flex flex-col items-center max-w-7xl w-[90%] shadow-sm rounded-md py-14 mb-10 border border-gray-200">
      {/* Book Specification */}
      <div className="w-[90%] flex flex-col">
        <h1 className="text-2xl text-center mb-2">
          Book Specification & Summary
        </h1>
        {/* Description Sect */}
        <DescriptionSect book={book} />
      </div>
    </div>
  );
};

export default BookSpec;
