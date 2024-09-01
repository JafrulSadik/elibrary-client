"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { IoMdCheckmark } from "react-icons/io";
import { notify } from "../../../../../../lib/notify";
import { addToFavourite } from "../../../../../action/book-action";

type Props = {
  isFavourite?: boolean;
  bookId: string;
};

const AddToFavourite = (props: Props) => {
  const { isFavourite, bookId } = props;
  const [loading, setLoading] = useState(false);
  const [favourite, setFavourite] = useState(isFavourite);

  const router = useRouter();

  const handleAddToFavourite = async () => {
    setLoading(true);
    const response = await addToFavourite({ bookId });

    if (response.code === 200) {
      setFavourite((prev) => !prev);
      if (!favourite) {
        notify({ message: "Book added to the favourites." });
      } else {
        notify({ message: "Book removed from favourites." });
      }
    } else if (response.code === 401) {
      setLoading(false);
      router.push("/login");
    } else {
      notify({ message: response.message });
    }

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
