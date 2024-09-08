import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import DownloadBtn from "../../../../components/buttons/download-btn";
import PreviewBtn from "../../../../components/buttons/preview-btn";
import { config } from "../../../../config/config";
import { auth } from "../../../../lib/auth";
import { getBooksById, isAddedToFavourite } from "../../../action/book-action";
import AddToFavourite from "./_components/add-to-favourite";
import BookSpec from "./_components/book-spec";
import Ratings from "./_components/ratings";
import Reviews from "./_components/review-rating/Reviews";

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
  const session = await auth();
  const { id } = params;
  let isFavourite;

  if (session) {
    isFavourite = await isAddedToFavourite({ bookId: id });
  }

  const response = await getBooksById({ id });

  const { numOfRating, totalRating, cover, title, genre, author } =
    response.data;

  const rating = totalRating / numOfRating;

  return (
    <div className="flex flex-col items-center bg-[#f5f5f5]">
      <div className="flex flex-col my-12 max-w-7xl w-[90%] shadow-sm rounded-md py-16 border border-gray-200">
        {/* Book Details */}
        <div className="flex flex-row flex-wrap gap-5 items-center w-full">
          {/* Imgae Sect */}
          <div className="flex flex-1 justify-center">
            <div className="overflow-hidden h-64 w-64  md:h-72 md:w-72 lg:h-96 lg:w-96 relative flex justify-center rounded-md border">
              <Image
                src={cover}
                alt=""
                width="0"
                height="0"
                className="object-conver blur-2xl w-full h-full"
              />
              <Image
                src={cover}
                alt=""
                width={300}
                height={300}
                quality={100}
                className="absolute object-contain  h-full z-20 w-full"
              />
            </div>
          </div>

          {/* Title Sect */}
          <div className="flex justify-center items-center md:items-start flex-col flex-1 w-64 gap-2 md:gap-3 lg:gap-">
            <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-crusta-950">
              {title}
            </h1>
            <p className=" text-base md:text-xl lg:text-2xl text-black font-normal">
              Writer : {author.name}
            </p>
            <p className="text-sm md:text-base lg:text-xl font-light text-black">
              Genre : {genre.title}
            </p>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex text-yellow-500 text-base md:text-xl lg:text-2xl">
                <Ratings rating={rating} />
              </div>
              <p className="text-xs md:text-sm lg:text-xl">
                {rating ? rating.toPrecision(2) : 0} | {numOfRating} reviews
              </p>
            </div>

            <AddToFavourite isFavourite={isFavourite?.data} bookId={id} />
            <PreviewBtn bookId={id} />
            <DownloadBtn downloadLink={response.data.file} />
          </div>
        </div>
      </div>

      {/* Specification others */}
      <BookSpec book={response.data} />

      {/* Reviews and others sect */}
      <Reviews bookId={id} totalReviews={numOfRating} />
    </div>
  );
};

export default page;
