"use client";

import { useState } from "react";
import { notify } from "../../../../../lib/notify";
import { addToFavourite } from "../../../../action/book-action";

type Props = {
  bookId: string;
};

const Remove = (props: Props) => {
  const { bookId } = props;
  const [loading, setLoading] = useState(false);

  const removeBookFromFavourites = async () => {
    setLoading(true);
    await addToFavourite({ bookId });
    setLoading(false);
    notify({ message: "Book removed from favourite." });
  };

  return (
    <button
      className="w-14 py-1 lg:py-2 md:w-24  text-center  rounded-md text-white text-xs md:text-sm shadow-md bg-red-700 hover:bg-red-600"
      onClick={() => removeBookFromFavourites()}
      disabled={loading}
    >
      Remove
    </button>
  );
};

export default Remove;
