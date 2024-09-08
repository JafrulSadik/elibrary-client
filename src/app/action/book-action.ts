"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { config } from "../../config/config";
import { auth } from "../../lib/auth";
import {
  AddReviewResponse,
  ApiResponseArryData,
  ApiSuccessfullResponse,
} from "../../types/ApiResponse";
import {
  Book,
  GetUserBooksProps,
  PaginationType,
  RatingCount,
  Reviews,
} from "../../types/Book";
import { ApiResponseSingleData } from "./../../types/ApiResponse";

type ReviewProps = {
  rating: number | null;
  review: string | null;
  bookId: string;
};

type GetBooksByIdProps = {
  id: string;
};

type FavouriteBooksProps = {
  page: string | undefined;
};

type BooleanType = true | false;

type GetReviewProps = {
  bookId: string;
  limit: number;
};

export const createBook = async (formData: FormData) => {
  const session = await auth();

  if (!session.isAuthenticated) {
    redirect("/login");
  }

  try {
    const response = await fetch(`${config.baseUrl}/api/v1/books/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session?.tokens?.accessToken}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to create data.");
    }

    return await response.json();
  } catch (error: any) {
    throw error;
  }
};

export const getUserBooks = async (props: GetUserBooksProps) => {
  const { page } = props;
  const session = await auth();

  if (!session.isAuthenticated) {
    redirect("/login");
  }

  try {
    const response = await fetch(
      `${config.baseUrl}/api/v1/users/${session?.user?.id}/all-books?limit=5&page=${page}`,
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

export const getBooks = async ({ searchUrl }: { searchUrl?: string }) => {
  try {
    const response = await fetch(
      `${config.baseUrl}/api/v1/books/${searchUrl || ""}`
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

export const deleteBook = async ({ bookId }: { bookId: string }) => {
  const session = await auth();

  if (!session.isAuthenticated) {
    redirect("/login");
  }

  try {
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
  const session = await auth();

  if (!session.isAuthenticated) {
    return {
      code: 401,
      message: "Authentication required",
      data: false,
    };
  }

  try {
    const response = await fetch(
      `${config.baseUrl}/api/v1/books/${bookId}/reviews/`,
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

    revalidatePath(`/books/${bookId}`);

    if (!response.ok) {
      return {
        code: 500,
        message: "Failed to add review",
      };
    }

    const data = (await response.json()) as AddReviewResponse<Reviews>;

    return data;
  } catch (error) {
    return {
      code: 500,
      message: "Failed to add review",
    };
  }
};

export const getReviews = async (props: GetReviewProps) => {
  const { bookId, limit } = props;
  try {
    const response = await fetch(
      `${config.baseUrl}/api/v1/books/${bookId}/reviews?limit=${limit}`
    );
    const data = (await response.json()) as ApiResponseArryData<Reviews>;
    return data;
  } catch (error) {
    throw new Error("Failed to retrive reviews.");
  }
};

export const getBooksById = async (props: GetBooksByIdProps) => {
  const { id } = props;

  const response = await fetch(`${config.baseUrl}/api/v1/books/${id}`);

  if (!response.ok) {
    throw new Error("Failed to retrive data.");
  }

  const data = (await response.json()) as ApiResponseSingleData<Book>;

  return data;
};

export const getFavouriteBooks = async (props: FavouriteBooksProps) => {
  const { page = 1 } = props;
  const session = await auth();

  if (!session.isAuthenticated) {
    redirect("/login");
  }

  const response = await fetch(
    `${config?.baseUrl}/api/v1/favourite/books/${session?.user?.id}?page=${page}`,
    {
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${session?.tokens?.accessToken}` || "",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Fatch data failed!");
  }

  const data = (await response.json()) as ApiSuccessfullResponse<
    Book,
    PaginationType
  >;

  return data;
};

export const addToFavourite = async (props: { bookId: string }) => {
  const { bookId } = props;
  const session = await auth();

  if (!session.isAuthenticated) {
    return {
      code: 401,
      message: "Authentication required.",
      data: false,
    };
  }

  try {
    const response = await fetch(`${config.baseUrl}/api/v1/favourite/add`, {
      method: "PATCH",
      body: JSON.stringify({
        userId: session?.user?.id,
        bookId: bookId,
      }),
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${session?.tokens?.accessToken}` || "",
      },
    });

    revalidatePath("/dasboard/favourite-books");

    if (!response.ok) {
      return {
        code: 500,
        message: "Failed to add book in favourite list.",
      };
    }

    const data = (await response.json()) as ApiResponseSingleData<BooleanType>;

    return data;
  } catch (error) {
    return {
      code: 500,
      message: "Failed to add review",
    };
  }
};

export const countReviews = async (props: { bookId: string }) => {
  const { bookId } = props;
  try {
    const response = await fetch(
      `${config.baseUrl}/api/v1/books/${bookId}/review-count`
    );

    if (!response.ok) {
      throw new Error("Fetch data failed!");
    }

    const data = (await response.json()) as ApiResponseArryData<RatingCount>;

    return data;
  } catch (error) {
    throw new Error("Fetch data failed!");
  }
};

export const isAddedToFavourite = async (props: { bookId: string }) => {
  const session = await auth();
  const { bookId } = props;

  if (!session.isAuthenticated) {
    return {
      code: 401,
      message: "",
      data: false,
    };
  }

  const response = await fetch(
    `${config?.baseUrl}/api/v1/favourite/${session?.user?.id}/${bookId}`,
    {
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${session?.tokens?.accessToken}` || "",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Fatch data failed!");
  }

  revalidatePath(`/books/${bookId}`);
  revalidatePath("/dashboard/favourite-books");

  const data = (await response.json()) as ApiResponseSingleData<BooleanType>;

  return data;
};
