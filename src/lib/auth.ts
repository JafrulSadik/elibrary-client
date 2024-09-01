"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { LoginSchemaType } from "../app/(auth)/login/_components/login-form";
import { config } from "../config/config";
import { ApiResponseSingleData } from "../types/ApiResponse";
import { UserAuth } from "../types/UserAuth";

export async function login(formData: LoginSchemaType) {
  const email = formData.email;
  const password = formData.password;

  try {
    const requsetBody = {
      email,
      password,
    };

    const data = await fetch(`${config.baseUrl}/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: requsetBody ? JSON.stringify(requsetBody) : undefined,
    });

    const response = (await data.json()) as ApiResponseSingleData<UserAuth>;

    if (response.code === 200) {
      const expires = new Date(Date.now() + 23 * 60 * 60 * 1000);
      const user = response.data.user;
      const token = response.data.tokens;

      cookies().set("user", JSON.stringify(user), { expires, httpOnly: true });
      cookies().set("token", JSON.stringify(token), {
        expires,
        httpOnly: true,
      });
    }

    if (response.code === 401 || response.code === 404) {
      return {
        code: 401,
        message: "Wrong credentials.",
      };
    }

    return {
      code: 500,
      message: "Something went wrong.",
    };
  } catch (error) {
    return {
      code: 500,
      message: "Something went wrong.",
    };
  }
}

export async function getSession(key: string) {
  const session = cookies().get(key)?.value;

  if (!session) return null;

  return session;
}

export async function signOut() {
  cookies().set("token", "", { expires: new Date(0) });
  cookies().set("user", "", { expires: new Date(0) });
  redirect("/login");
}

export type AuthType =
  | ({
      isAuthenticated: true;
    } & UserAuth)
  | {
      isAuthenticated: false;
    };

export async function auth(): Promise<AuthType> {
  const tokens = await getSession("token");
  const user = await getSession("user");

  if (!tokens || !user) {
    return { isAuthenticated: false };
  }

  return {
    isAuthenticated: true,
    user: JSON.parse(user),
    tokens: JSON.parse(tokens),
  };
}
