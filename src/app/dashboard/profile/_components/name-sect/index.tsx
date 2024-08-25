"use client";

import { useEffect, useRef, useState } from "react";
import { FaPen } from "react-icons/fa";

type Props = {
  name: string;
};

const NameSect = (props: Props) => {
  const { name } = props;
  const [change, setChange] = useState(false);
  const [newName, setNewName] = useState(name);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = () => {
    setChange((prev) => !prev);
    setNewName(name);
  };

  useEffect(() => {
    if (change) {
      inputRef.current?.focus();
    }
  }, [change]);

  return (
    <div className="text-base">
      <div className="flex items-center gap-2 ">
        <p className="font-semibold my-2">Full Name</p>
        <FaPen
          size={12}
          onClick={() => handleChange()}
          className=" cursor-pointer text-crusta-700"
        />
      </div>
      {!change ? (
        <p className="p-3 bg-gray-100 rounded-lg text-gray-600 text-sm">
          {name}
        </p>
      ) : (
        <input
          ref={inputRef}
          onChange={(e) => setNewName(e.target.value)}
          className="bg-gray-100 text-gray-600 text-sm p-3 rounded-lg w-full outline-none border border-crusta-900"
          defaultValue={newName}
        ></input>
      )}
    </div>
  );
};

export default NameSect;
