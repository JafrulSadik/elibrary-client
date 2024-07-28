"use client";
import { useState } from "react";
import Details from "../deatils";

const DescriptionSect = () => {
  const [option, setOption] = useState("summery");

  return (
    <>
      <div className="flex flex-col mt-3 mb-5">
        <div className="flex gap-2 text-sm md:text-base ">
          <button
            onClick={() => setOption("summery")}
            className={`p-2 text-peace-400 rounded-t-md  hover:bg-crusta-100 ${
              option === "summery" ? "bg-peace-400 text-white" : ""
            }`}
          >
            Summery
          </button>
          <button
            onClick={() => setOption("spec")}
            className={`p-2 text-peace-400 rounded-t-md  hover:bg-crusta-100 ${
              option === "spec" ? "bg-peace-400 text-white" : ""
            }`}
          >
            Specification
          </button>
          <button
            onClick={() => setOption("author")}
            className={`p-2 text-peace-400 rounded-t-md  hover:bg-crusta-100 ${
              option === "author" ? "bg-peace-400 text-white" : ""
            }`}
          >
            Author
          </button>
        </div>
        <div className="flex justify-center w-full">
          <div className="h-[0.2px] w-full bg-peace-400" />
        </div>
      </div>

      {/* Description */}
      <Details option={option} />
    </>
  );
};

export default DescriptionSect;
