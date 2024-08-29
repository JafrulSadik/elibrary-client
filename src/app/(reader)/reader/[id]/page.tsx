import BookReader from "./_components/book-reader";

const page = () => {
  return (
    <div className="min-h-svh relative flex justify-center w-full bg-gray-100">
      <div className="max-w-7xl w-[95%]">
        <BookReader />
      </div>
    </div>
  );
};

export default page;
