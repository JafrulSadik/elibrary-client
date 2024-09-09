import SearchCardSkeleton from "../../../../../skeletons/search-card-skeleton/SearchCardSkeleton";
import { Book } from "../../../../../types/Book";
import BooksCard from "../books-card";

type Props = {
  books: Book[];
  loading: boolean;
};

const AllBooks = (props: Props) => {
  const { books, loading } = props;
  return (
    <div className="p-4 md:p-8 rounded-md border border-gray-300  lg:min-h-[840px]">
      {loading ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-5 gap-y-6">
          {Array(5)
            .fill(0)
            .map((item, index) => (
              <SearchCardSkeleton key={index} />
            ))}
        </div>
      ) : books.length ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-3 gap-y-6">
          {books.map((book) => (
            <BooksCard book={book} key={book._id} />
          ))}
        </div>
      ) : (
        <div className="flex w-full justify-center items-center min-h-[50vh] lg:min-h-[780px]">
          <p className="">No books found!</p>
        </div>
      )}
    </div>
  );
};

export default AllBooks;
