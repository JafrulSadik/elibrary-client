"use client";

import Link from "next/link";

type Props = {
  downloadLink: string;
};

const DownloadBtn = (props: Props) => {
  const { downloadLink } = props;
  return (
    <Link
      href={downloadLink}
      rel="noopener noreferrer"
      target="_blank"
      className="flex justify-center items-center h-8 w-60 md:h-12 md:w-60  lg:w-60 lg:h-14 bg-crusta-950 rounded-md text-white"
    >
      Download Now
    </Link>
  );
};

export default DownloadBtn;
