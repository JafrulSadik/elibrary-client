"use client";

import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
import { FaPen } from "react-icons/fa";
import ProfileImg from "../../../../../../../public/images/writers/writer-1.png";
import "./input-style.css";

const ImageSect = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    inputRef.current?.click();
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    console.log(file);
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
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
            src={ProfileImg}
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
          onChange={handleImageChange}
          ref={inputRef}
          type="file"
        />
      </div>
    </div>
  );
};

export default ImageSect;
