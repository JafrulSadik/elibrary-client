"use client";

import Link from "next/link";

type Props = {
  bookId: string;
};

const PreviewBtn = (props: Props) => {
  const { bookId } = props;
  return (
    <Link
      href={`/reader/${bookId}`}
      className="flex justify-center items-center h-8 w-60 md:h-12 md:w-60  lg:w-60 lg:h-14 bg-peace-400 rounded-md text-white"
    >
      Read Online
    </Link>
  );
};

export default PreviewBtn;
