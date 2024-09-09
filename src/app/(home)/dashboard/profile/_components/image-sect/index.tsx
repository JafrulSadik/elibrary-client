"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useRef, useState } from "react";
import { FaPen } from "react-icons/fa";
import { RiLoader2Line } from "react-icons/ri";
import NoProfilePic from "../../../../../../assets/Images/ProfileImg/image.png";
import { notify } from "../../../../../../lib/notify";
import { updateUser } from "../../../../../action/user-action";
import "./input-style.css";

type Props = {
  profileImg: string | undefined;
};

const ImageSect = (props: Props) => {
  const { profileImg } = props;
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    status: false,
    message: "",
  });
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    inputRef.current?.click();
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    setLoading(true);

    if (!selectedImage) {
      setError({
        status: true,
        message: "Invalid file.",
      });
    } else {
      const formData = new FormData();
      formData.append("profileImg", selectedImage);

      const response = await updateUser(formData);
      if (response.code === 401) {
        router.push("/login");
      } else if (response.code === 200) {
        notify({ message: "Successfully update data." });
        setSelectedImage(null);
        router.refresh();
      } else {
        notify({ message: "Something went wrong." });
      }
    }

    setLoading(false);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-6">
      <div className="relative rounded-full" onClick={() => handleChange()}>
        {previewUrl ? (
          <Image
            src={previewUrl}
            height="0"
            width="0"
            alt="profile.img"
            className="border border-crusta-950 rounded-full size-40  object-cover"
          />
        ) : (
          <Image
            src={profileImg || NoProfilePic}
            height={150}
            width={150}
            alt="profile.img"
            className="border border-crusta-950 rounded-full size-40  object-cover"
          />
        )}
        <div className="absolute top-4 -right-0 cursor-pointer bg-crusta-100 p-2 rounded-full border-[3px] border-white">
          <FaPen
            size={12}
            onClick={() => handleChange()}
            className=" text-crusta-700"
          />
        </div>
        <input
          className="hidden"
          accept="image/*"
          onChange={handleImageChange}
          ref={inputRef}
          type="file"
        />
      </div>

      {error.status && (
        <p className="font-semibold text-red-600">{error.message}</p>
      )}

      {selectedImage && (
        <button
          onClick={handleUpload}
          className="flex justify-center items-center gap-1 px-6 py-2 my-2 text-white  rounded-md bg-black hover:bg-[#242424]"
        >
          {loading && <RiLoader2Line className="animate-spin" size={16} />}
          <span>Upload Image</span>
        </button>
      )}
    </div>
  );
};

export default ImageSect;
