"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaPen } from "react-icons/fa";
import { RiLoader2Line } from "react-icons/ri";
import { notify } from "../../../../../../lib/notify";
import { updateUser } from "../../../../../action/user-action";

type Props = {
  name: string;
};

const NameSect = (props: Props) => {
  const { name } = props;
  const [change, setChange] = useState(false);
  const [newName, setNewName] = useState(name);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    status: false,
    message: "",
  });
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = () => {
    setChange((prev) => !prev);
    setNewName(name);
  };

  const handleChangeName = async () => {
    setLoading(true);
    if (newName.length < 3) {
      setError({
        status: true,
        message: "Name should be at least 3 charecter.",
      });
      setTimeout(() => {
        setError({
          status: false,
          message: "",
        });
      }, 3000);
    } else {
      const formData = new FormData();
      formData.append("name", newName);

      const response = await updateUser(formData);
      if (response.code === 401) {
        router.push("/login");
      } else if (response.code === 200) {
        notify({ message: "Successfully update data." });
        setChange(false);
      } else {
        notify({ message: "Something went wrong." });
      }
    }

    setLoading(false);
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
        <>
          <input
            ref={inputRef}
            onChange={(e) => setNewName(e.target.value)}
            className="bg-gray-100 text-gray-600 text-sm p-3 rounded-lg w-full outline-none border border-crusta-900"
            defaultValue={newName}
          />
          {error.status && (
            <p className="my-1 text-sm font-semibold text-red-600">
              {error.message}
            </p>
          )}
          <button
            disabled={loading}
            onClick={handleChangeName}
            className={`flex items-center justify-center gap-2 px-8 py-2 my-2 text-white  rounded-md shadow-md ${
              loading ? "bg-gray-400" : "bg-black"
            }`}
          >
            {loading && <RiLoader2Line className="animate-spin" size={16} />}
            <span>Save</span>
          </button>
        </>
      )}
    </div>
  );
};

export default NameSect;
