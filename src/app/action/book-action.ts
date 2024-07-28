"use server";

import { config } from "../../config/config";
import { auth } from "../../lib/auth";

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
