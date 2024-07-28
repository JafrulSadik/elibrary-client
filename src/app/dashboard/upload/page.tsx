import { auth } from "../../../lib/auth";
import UploadBookForm from "../upload-book/components/upload-book-form";

const UploadBook = async () => {
  const session = await auth();

  return (
    <div className="flex flex-col items-center p-8 rounded-md border bg-white border-gray-300 min-h-[100vh]">
      <div className="flex flex-col w-[90%]">
        <h1 className="font-light text-4xl p-10 text-center">Add a book</h1>
        <UploadBookForm />
      </div>
    </div>
  );
};

export default UploadBook;
