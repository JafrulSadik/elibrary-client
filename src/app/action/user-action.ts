"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { config } from "../../config/config";
import { auth } from "../../lib/auth";
import {
  ApiResponseArryData,
  ApiResponseSingleData,
} from "../../types/ApiResponse";
import { PopularAuthorType, User } from "../../types/User";

type Props = {
  limit: number | undefined;
};

export const popularAuthor = async (props: Props) => {
  const limit = props?.limit;
  try {
    const response = await fetch(
      `${config.baseUrl}/api/v1/author/popular?${limit ? `limit=${limit}` : ""}`
    );

    if (!response.ok) {
    }

    const data =
      (await response.json()) as ApiResponseArryData<PopularAuthorType>;

    return data;
  } catch (error) {
    throw new Error("Something went wrong.");
  }
};

export const getUserProfile = async () => {
  const session = await auth();
  if (!session.isAuthenticated) {
    redirect("/login");
  }

  try {
    const response = await fetch(
      `${config.baseUrl}/api/v1/users/profile/${session.user?.id}`,
      {
        headers: {
          Authorization: `bearer ${session.tokens?.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data.");
    }

    const data = (await response.json()) as ApiResponseSingleData<User>;

    return data;
  } catch (error) {
    throw new Error("Something is wrong.");
  }
};

export const updateUser = async (formData: FormData) => {
  const session = await auth();

  if (!session.isAuthenticated) {
    return {
      code: 401,
      message: "Authentication failed.",
    };
  }

  try {
    const response = await fetch(`${config.baseUrl}/api/v1/users/`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${session?.tokens?.accessToken}`,
      },
      body: formData,
    });

    if (!response.ok) {
      return {
        code: 500,
        message: "Something went wrong.",
      };
    }

    const data = (await response.json()) as ApiResponseSingleData<User>;

    cookies().set("user", JSON.stringify(data.data));
    revalidatePath("/");

    return data;
  } catch (error) {
    return {
      code: 500,
      message: "Something went wrong.",
    };
  }
};
