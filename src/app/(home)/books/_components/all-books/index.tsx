import { Book } from "../../../../../types/Book";
import BooksCard from "../books-card";

type Props = {
  books: Book[];
};

const AllBooks = (props: Props) => {
  const { books } = props;
  return (
    <div className="p-4 md:p-8 rounded-md border border-gray-300 lg:min-h-[840px]">
      {books.length ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-3 gap-y-6">
          {books.map((book) => (
            <BooksCard book={book} key={book._id} />
          ))}
        </div>
      ) : (
        <div className="flex w-full justify-center items-center">
          <p className="font-semibold">No books found!</p>
        </div>
      )}
    </div>
  );
};

export default AllBooks;
