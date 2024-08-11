"use server";
import { config } from "../../config/config";
import { auth } from "../../lib/auth";
import { ApiSuccessfullResponse } from "../../types/ApiResponse";
import { Book, GetUserBooksProps, PaginationType } from "../../types/Book";

export const createBook = async (formData: FormData) => {
  const session = await auth();

  try {
    const response = await fetch(`${config.baseUrl}/api/v1/books/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session?.tokens?.accessToken}`,
      },
      body: formData,
    });

    return await response.json();
  } catch (error: any) {
    throw error;
  }
};

export const getUserBooks = async (props: GetUserBooksProps) => {
  const { page } = props;
  try {
    const session = await auth();
    const response = await fetch(
      `${config.baseUrl}/api/v1/users/${session?.user.id}/all-books?limit=10&page=${page}`,
      {
        headers: {
          Authorization: session?.tokens?.accessToken || "",
        },
      }
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
    throw new Error("Failed to fatch data.");
  }
};

export const getBooks = async () => {
  // const { page, apiUrl } = props;
  try {
    const session = await auth();

    // console.log(apiUrl);
    // const response = await fetch(
    //   apiUrl,
    //   {
    //     headers: {
    //       Authorization: session?.tokens?.accessToken || "",
    //     },
    //   }
    // );

    // if (!response.ok) {
    //   throw new Error("Failed to fatch data.");
    // }
    // const data = (await response.json()) as ApiSuccessfullResponse<
    //   Book,
    //   PaginationType
    // >;
    // return data;
  } catch (error) {
    throw new Error("Failed to fatch data.");
  }
};
