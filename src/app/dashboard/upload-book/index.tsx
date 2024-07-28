import UploadBookForm from "./components/upload-book-form";

const UploadBook = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="font-semibold text-4xl p-10 ">Add a book</h1>
      <UploadBookForm />
    </div>
  );
};

export default UploadBook;
