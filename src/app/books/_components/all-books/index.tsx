import { Book } from "../../../../types/Book";
import BooksCard from "../books-card";

type Props = {
  books: Book[];
};

const AllBooks = (props: Props) => {
  const { books } = props;
  return (
    <div className="p-4 md:p-8 rounded-md border border-gray-300">
      {books.length ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(160px,1fr))] lg:min-h-[92.5vh] gap-3">
          {books.map((book) => (
            <BooksCard book={book} key={book._id} />
          ))}
        </div>
      ) : (
        <div className="flex w-full justify-center items-center min-h-[92.5vh]">
          <p className="font-semibold">No books found!</p>
        </div>
      )}
    </div>
  );
};

export default AllBooks;
