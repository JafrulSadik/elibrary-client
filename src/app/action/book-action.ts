"use server";
import { config } from "../../config/config";
import { auth } from "../../lib/auth";
import {
  AddReviewResponse,
  ApiSuccessfullResponse,
} from "../../types/ApiResponse";
import {
  Book,
  GetUserBooksProps,
  PaginationType,
  Reviews,
} from "../../types/Book";

type ReviewProps = {
  rating: number | null;
  review: string | null;
  bookId: string;
};

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

export const getBooks = async ({ searchUrl }: { searchUrl: string }) => {
  try {
    const response = await fetch(`${config.baseUrl}/api/v1/books/${searchUrl}`);

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

export const deleteBook = async ({ bookId }: { bookId: string }) => {
  try {
    const session = await auth();
    const response = await fetch(`${config.baseUrl}/api/v1/books/${bookId}`, {
      method: "DELETE",
      headers: {
        Authorization: session?.tokens?.accessToken || "",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete the book.");
    }
    return "";
  } catch (error) {
    throw new Error("Failed to delete the book.");
  }
};

export const addReview = async (props: ReviewProps) => {
  const { bookId, review, rating } = props;
  try {
    const session = await auth();
    const response = await fetch(
      `${config.baseUrl}/api/v1/books/${bookId}/reviews`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: session?.tokens?.accessToken || "",
        },
        body: JSON.stringify({
          comment: review || "",
          rating: rating,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to add review.");
    }

    const data = (await response.json()) as AddReviewResponse<Reviews>;
    return data;
  } catch (error) {
    throw new Error("Failed to add review.");
  }
};
