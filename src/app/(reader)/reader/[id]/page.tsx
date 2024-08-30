import { getBooksById } from "../../../action/book-action";
import BookReader from "./_components/book-reader";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const response = await getBooksById({ id });

  const { file } = response.data;

  return (
    <div className="min-h-svh relative flex justify-center w-full bg-gray-100">
      <div className="max-w-7xl w-[95%]">
        <BookReader book={file} />
      </div>
    </div>
  );
};

export default page;
