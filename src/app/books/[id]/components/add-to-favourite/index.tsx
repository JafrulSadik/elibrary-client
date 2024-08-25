"use client";

import { useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { IoMdCheckmark } from "react-icons/io";
import { notify } from "../../../../../lib/notify";
import {
  addToFavourite,
  isAddedToFavourite,
} from "../../../../action/book-action";

type Props = {
  isFavourite?: boolean;
  bookId: string;
};

const AddToFavourite = (props: Props) => {
  const { isFavourite, bookId } = props;
  const [loading, setLoading] = useState(false);
  const [favourite, setFavourite] = useState(isFavourite);

  const handleAddToFavourite = async () => {
    setLoading(true);
    await addToFavourite({ bookId });
    const response = await isAddedToFavourite({ bookId });

    setFavourite(response.data);
    notify({ message: "Book added to the favourite." });
    setLoading(false);
  };

  return (
    <>
      {favourite ? (
        <button
          className="flex justify-center items-center gap-2 cursor-pointer  text-crusta-800  py-1 w-60 md:py-2  rounded-md"
          onClick={() => handleAddToFavourite()}
          disabled={loading}
        >
          <div className="flex  justify-center items-center mt-[2px]">
            <IoMdCheckmark size={18} />
          </div>
          <div className="flex justify-center text-xs md:text-base h-full rounded-r-lg items-center">
            <p>Added to favourite</p>
          </div>
        </button>
      ) : (
        <button
          className="flex justify-center items-center gap-2 cursor-pointer  text-crusta-800  py-1 w-60 md:py-2  rounded-md"
          onClick={() => handleAddToFavourite()}
          disabled={loading}
        >
          <div className="flex  justify-center items-center mt-[2px]">
            <GrFavorite size={18} />
          </div>
          <div className="flex justify-center text-xs md:text-base h-full rounded-r-lg items-center">
            <p>Add to favourite</p>
          </div>
        </button>
      )}
    </>
  );
};

export default AddToFavourite;
