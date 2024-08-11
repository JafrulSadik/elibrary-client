import { auth } from "../../../lib/auth";
import UploadBookForm from "./_components/upload-form";

const UploadBook = async () => {
  const session = await auth();

  return (
    <div className="flex flex-col items-center rounded-md border bg-white border-gray-300">
      <div className="flex flex-col w-[80%] my-12 lg:my-16">
        <h1 className="font-light text-2xl md:text-4xl mb-8 lg:mb-12  text-center">
          Add a book
        </h1>
        <UploadBookForm />
      </div>
    </div>
  );
};

export default UploadBook;
