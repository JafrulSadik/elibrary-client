import { useState } from "react";
import { AiOutlineBgColors } from "react-icons/ai";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

type Props = {
  previousPage: Function;
  nextPage: Function;
  pageNumber: number;
  numPages: number;
  divWidth: number;
  handleDivWidth: Function;
  width: number;
  handleColor: Function;
};

const ReaderMenu = (props: Props) => {
  const { previousPage, nextPage, pageNumber, numPages, handleColor } = props;
  const [colorOption, setColorOption] = useState(false);

  const handleSetColor = ({ selectedColor }: { selectedColor: string }) => {
    handleColor({ selectedColor });
    setColorOption(false);
  };

  return (
    <div className="max-w-3xl flex gap-2 md:gap-3 sticky border border-gray-300 bg-crusta-50 py-2 px-3 rounded-lg my-3">
      <button
        disabled={pageNumber <= 1}
        onClick={() => previousPage()}
        className="p-1 md:p-3 bg-white rounded-full border border-gray-300 hover:bg-gray-100"
      >
        <GrFormPrevious className="text-crusta-950 text-xs md:text-base" />
      </button>

      <div className="relative">
        <div
          onClick={() => setColorOption((prev) => !prev)}
          className="p-1 md:p-3 bg-white rounded-full border border-gray-300 hover:bg-gray-100"
        >
          <AiOutlineBgColors className="text-crusta-950 text-xs md:text-base" />
        </div>

        {/* Color sceme */}
        <div
          className={`absolute ${
            colorOption ? "" : "hidden"
          } left-1/2 mt-1 transform -translate-x-1/2 bottom  flex p-2 md:p-3 bg-gray-100 border border-gray-300  rounded-md gap-2 md:gap-3`}
        >
          <div
            onClick={() => handleSetColor({ selectedColor: "#fff" })}
            className="size-4 md:size-6 bg-[#fff] rounded-full border hover:border-gray-300"
          ></div>
          <div
            onClick={() => handleSetColor({ selectedColor: "#E7D6BC" })}
            className="size-4 md:size-6 bg-[#E7D6BC] rounded-full"
          ></div>
          <div
            onClick={() => handleSetColor({ selectedColor: "#CCF1D0" })}
            className="size-4 md:size-6 bg-[#CCF1D0] rounded-full"
          ></div>
          <div
            onClick={() => handleSetColor({ selectedColor: "#F9ECFD" })}
            className="size-4 md:size-6 bg-[#F9ECFD] rounded-full"
          ></div>
          <div
            onClick={() => handleSetColor({ selectedColor: "#eae4eb" })}
            className="size-4 md:size-6 bg-[#eae4eb] rounded-full"
          ></div>
        </div>
      </div>

      <button
        onClick={() => nextPage()}
        disabled={pageNumber >= numPages}
        className="p-1 md:p-3 bg-white rounded-full border border-gray-300 hover:bg-gray-100"
      >
        <GrFormNext className="text-crusta-950 text-xs md:text-base" />
      </button>
    </div>
  );
};

export default ReaderMenu;
