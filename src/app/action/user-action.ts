"use server";

import { config } from "../../config/config";
import { ApiResponseArryData } from "../../types/ApiResponse";
import { PopularAuthorType } from "../../types/User";

export const popularAuthor = async () => {
  try {
    const response = await fetch(`${config.baseUrl}/api/v1/author/popular`);

    if (!response.ok) {
    }

    const data =
      (await response.json()) as ApiResponseArryData<PopularAuthorType>;

    return data;
  } catch (error) {
    throw new Error("Something went wrong.");
  }
};
