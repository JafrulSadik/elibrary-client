"use client";
import { useState } from "react";
import useElementWidth from "../../../../../../hooks/useElementWidth";
import DisplayBook from "../display-book";
import ReaderMenu from "../reader-menu";

const BookReader = () => {
  const [width, setWidth] = useState<number>(0);
  const [color, setColor] = useState("");
  const [divRef, divWidth] = useElementWidth<HTMLDivElement>({
    handleDivWidth,
    width,
  });

  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);

  function handleDivWidth({ width }: { width: number }) {
    setWidth(width);
  }

  function handleColor({ selectedColor }: { selectedColor: string }) {
    console.log({ selectedColor });
    setColor(selectedColor);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function handleloadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }
  return (
    <div className="w-full flex flex-col items-center ">
      <div className="sticky top-0 z-50">
        <ReaderMenu
          width={width}
          divWidth={divWidth}
          handleDivWidth={handleDivWidth}
          previousPage={previousPage}
          nextPage={nextPage}
          pageNumber={pageNumber}
          numPages={numPages}
          handleColor={handleColor}
        />
      </div>
      <div
        ref={divRef}
        className="w-full flex flex-col items-center overflow-hidden"
      >
        <DisplayBook
          handleloadSuccess={handleloadSuccess}
          width={divWidth}
          pageNumber={pageNumber}
          selectedColor={color}
        />
      </div>
      <div className="my-3 bg-crusta-50 p-1 md:p-2 border border-gray-300  rounded-md">
        <p className="text-[10px] md:text-sm">
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
      </div>
    </div>
  );
};

export default BookReader;
