"use server";
import { config } from "../../config/config";
import {
  ApiResponseArryData,
  ApiSuccessfullResponse,
} from "../../types/ApiResponse";
import { Book, PaginationType } from "../../types/Book";
import { Genre } from "../../types/Genre";

type Props = {
  genre: Genre;
};

export const getAllGenres = async () => {
  try {
    const response = await fetch(`${config.baseUrl}/api/v1/genres`);

    if (!response.ok) {
      throw new Error("Failed to fatch data.");
    }
    const data = (await response.json()) as ApiResponseArryData<Genre>;
    return data;
  } catch (error) {
    throw new Error("Failed to fatch data.");
  }
};

export const getBookByGenreId = async (props: Props) => {
  const { genre } = props;

  try {
    const response = await fetch(
      `${config.baseUrl}/api/v1/books?genres=${genre.code}&limit=5`
    );

    if (!response.ok) {
      throw new Error("Failed to fatch data.");
    }
    const data = (await response.json()) as ApiSuccessfullResponse<
      Book,
      PaginationType
    >;

    return data;
  } catch (error) {
    console.log({ error });
    throw new Error("Failed to fatch data.");
  }
};
