import BooksCard from "../books-card";

const AllBooks = () => {
  return (
    <div className="p-8 rounded-md border border-gray-300">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(160px,1fr))]  gap-6 ">
        <div className="flex justify-center">
          <BooksCard />
        </div>
        <div className="flex justify-center">
          <BooksCard />
        </div>
        <div className="flex justify-center">
          <BooksCard />
        </div>
        <div className="flex justify-center">
          <BooksCard />
        </div>
        <div className="flex justify-center">
          <BooksCard />
        </div>
        <div className="flex justify-center">
          <BooksCard />
        </div>
        <div className="flex justify-center">
          <BooksCard />
        </div>
        <div className="flex justify-center">
          <BooksCard />
        </div>
        <div className="flex justify-center">
          <BooksCard />
        </div>
        <div className="flex justify-center">
          <BooksCard />
        </div>
        <div className="flex justify-center">
          <BooksCard />
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
