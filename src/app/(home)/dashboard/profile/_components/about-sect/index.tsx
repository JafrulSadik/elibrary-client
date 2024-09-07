"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaPen } from "react-icons/fa";
import { RiLoader2Line } from "react-icons/ri";
import { notify } from "../../../../../../lib/notify";
import { updateUser } from "../../../../../action/user-action";

type Props = {
  about: string | undefined;
};

const AboutSect = (props: Props) => {
  const { about } = props;
  const [change, setChange] = useState(false);
  const [newInput, setNewInput] = useState(about);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const router = useRouter();

  const handleChange = () => {
    setChange((prev) => !prev);
    setNewInput(about);
  };

  const handleUpdateAbout = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("about", newInput || "");
    const response = await updateUser(formData);

    if (response.code === 401) {
      router.push("/login");
    } else if (response.code === 200) {
      notify({ message: "Successfully update profile." });
      setChange(false);
      router.refresh();
    } else {
      notify({ message: "Something went wrong." });
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
        <>
          <textarea
            ref={inputRef}
            rows={4}
            cols={50}
            onChange={(e) => setNewInput(e.target.value)}
            className="bg-gray-100 text-gray-600 text-sm p-3 rounded-lg w-full outline-none border border-crusta-900"
            defaultValue={newInput}
          />
          <button
            disabled={loading}
            onClick={handleUpdateAbout}
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

export default AboutSect;
