"use client";

import { useEffect, useRef, useState } from "react";
import { FaPen } from "react-icons/fa";

type Props = {
  about: string;
};

const AboutSect = (props: Props) => {
  const { about } = props;
  const [change, setChange] = useState(false);
  const [newInput, setNewInput] = useState(about);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = () => {
    setChange((prev) => !prev);
    setNewInput(about);
  };

  useEffect(() => {
    if (change) {
      inputRef.current?.focus();
    }
  }, [change]);

  return (
    <div className="text-base">
      <div className="flex items-center gap-2 ">
        <p className="font-semibold my-2">About You</p>
        <FaPen
          size={12}
          onClick={() => handleChange()}
          className=" cursor-pointer text-crusta-700"
        />
      </div>
      {!change ? (
        about && (
          <p className="p-3 bg-gray-100 rounded-lg text-gray-600 text-sm">
            {about}
          </p>
        )
      ) : (
        <input
          ref={inputRef}
          onChange={(e) => setNewInput(e.target.value)}
          className="bg-gray-100 text-gray-600 text-sm p-3 rounded-lg w-full outline-none border border-crusta-900"
          defaultValue={newInput}
        ></input>
      )}
    </div>
  );
};

export default AboutSect;
