import { Metadata, ResolvingMetadata } from "next";
import { config } from "../../../../config/config";
import { getBooksById } from "../../../action/book-action";
import BookReader from "./_components/book-reader";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const product = await fetch(`${config.baseUrl}/api/v1/books/${id}`).then(
    (res) => res.json()
  );

  return {
    title: product.data.title,
  };
}

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
