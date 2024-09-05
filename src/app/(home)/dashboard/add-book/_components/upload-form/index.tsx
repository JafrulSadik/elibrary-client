"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { RiLoader2Line } from "react-icons/ri";
import { z } from "zod";
import { ApiResponseArryData } from "../../../../../../types/ApiResponse";
import { Genre } from "../../../../../../types/Genre";
import { createBook } from "../../../../../action/book-action";
import { getAllGenre } from "../../../../../action/genre-action";
import "./style.css";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 1; // 1MB
const ACCEPTED_FILE_TYPES = ["image/png", "image/jpeg"];
const MAX_PDF_FILE_SIZE = 1024 * 1024 * 10; // 10MB
const UPLOAD_FILE_TYPES = ["application/pdf"];

const BookFormSchema = z.object({
  title: z.string().min(1, "* Title is requried"),
  genre: z.string().min(1, "* Genre is required"),
  description: z.string().min(1, "* Description is required"),
  coverImage: z
    .any()
    .refine((file) => file?.length === 1, "* Cover image is required.")
    .refine(
      (file) => file[0]?.size < MAX_UPLOAD_SIZE,
      "Max image upload file size 1 MB."
    )
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file[0]?.type),
      "Cover image should be JPG, PNG or JPEG"
    ),

  pdfFile: z
    .any()
    .refine((file) => file?.length === 1, "* PDF file is required.")
    .refine(
      (file) => file[0]?.size < MAX_PDF_FILE_SIZE,
      "Max image upload file size 10 MB."
    )
    .refine(
      (file) => UPLOAD_FILE_TYPES.includes(file[0]?.type),
      "Book file must be PDF format."
    ),
});

export type BookFormType = z.infer<typeof BookFormSchema>;
type BookResponse = {
  code: number;
  message: string;
  book?: {
    author: string;
    cover: string;
    createdAt: Date;
    description: string;
    downloads: number;
    file: string;
    genre: string;
    numOfRating: number;
    status: string;
    title: string;
    totalRating: number;
    updatedAt: Date;
    _id: string;
  };
};

const UploadBookForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const [genres, setGenre] = useState<Genre[]>([]);

  const notify = () =>
    toast.success("Book creation successfull.", {
      style: {
        border: "1px solid #713200",
        padding: "16px",
        width: "600px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<BookFormType>({ resolver: zodResolver(BookFormSchema) });

  const onSubmit: SubmitHandler<BookFormType> = async (data) => {
    try {
      setLoading(true);
      const { title, genre, description, coverImage, pdfFile } = data;
      const formData = new FormData();

      formData.append("title", title);
      formData.append("genreId", genre);
      formData.append("description", description);
      formData.append("coverImage", coverImage[0]);
      formData.append("pdfFile", pdfFile[0]);

      const response: BookResponse = await createBook(formData);

      if (response.code !== 201) {
        setError("root", {
          message: response.message,
        });
      } else {
        notify();
        router.push("/dashboard/my-books");
      }

      setLoading(false);
    } catch (error: any) {
      setError("root", {
        message: error.message,
      });
    }
  };

  const fetchGenre = async () => {
    setLoadingData(true);
    const response = (await getAllGenre({
      queryString: "",
    })) as ApiResponseArryData<Genre>;
    setGenre(response.data);
    setLoadingData(false);
  };

  useEffect(() => {
    fetchGenre();
  }, []);

  return (
    <form
      // @ts-ignore
      action={handleSubmit(onSubmit)}
      // onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col text-sm gap-2 w-full"
    >
      <div className="flex flex-col gap-1 text-sm md:text-sm">
        <label>Book Title</label>
        <input
          type="text"
          className=" p-2 rounded-sm border-[0.5px] outline-none border-gray-200 font-base"
          placeholder="Enter book name"
          {...register("title")}
        />
      </div>

      {errors.title && (
        <p className="text-red-800 text-xs font-semibold py-2">
          {errors.title.message}
        </p>
      )}

      <div className=" flex flex-col gap-1 text-sm">
        <label>Genre</label>
        <select
          className="border-[0.5px] border-gray-200 rounded-sm outline-none p-2"
          // onChange={(event) => handleSelectGenre({ id: event.target.value })}
          defaultValue=""
          {...register("genre")}
        >
          <option value="" selected={true} disabled={true}>
            Select genre
          </option>
          {genres.map((genre) => (
            <option key={genre._id} value={genre._id} className="p-5">
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      {errors.genre && (
        <p className="text-red-800 text-xs font-semibold py-2">
          {errors.genre.message}
        </p>
      )}

      <div className=" flex flex-col gap-1 text-sm">
        <label>Description</label>
        <textarea
          className="p-2 rounded-md border-[0.5px] outline-none border-gray-200 font-base"
          placeholder="Enter book Description"
          {...register("description")}
        />
      </div>

      {errors.description && (
        <p className="text-red-800 text-xs font-semibold py-2">
          {errors.description.message}
        </p>
      )}

      <div className=" flex flex-col gap-1 text-sm">
        <label htmlFor="">Cover Image</label>
        <input
          className="selector p-2 rounded-sm border-[0.5px] outline-none border-gray-200 font-base"
          type="file"
          accept="image/*"
          {...register("coverImage")}
        />
      </div>

      {errors.coverImage && (
        <p className="text-red-800 text-xs font-semibold py-2">
          {errors.coverImage.message as string}
        </p>
      )}

      <div className=" flex flex-col gap-1 text-sm">
        <label htmlFor="">Book file</label>
        <input
          className="p-2 rounded-sm border-[0.5px] outline-none border-gray-200 font-base"
          type="file"
          accept="application/pdf"
          {...register("pdfFile")}
        />
      </div>

      {errors.pdfFile && (
        <p className="text-red-800 text-xs font-semibold py-2">
          {errors.pdfFile.message as string}
        </p>
      )}
      <div className="flex gap-2 mt-3">
        <button
          disabled={loading}
          className={`flex items-center justify-center gap-2 px-8 py-2 text-white  rounded-md shadow-md ${
            loading ? "bg-gray-400" : "bg-black"
          }`}
        >
          {loading && <RiLoader2Line className="animate-spin" size={16} />}
          <span>Add book</span>
        </button>
      </div>
    </form>
  );
};

export default UploadBookForm;
