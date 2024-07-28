"use server";
import { AuthError } from "next-auth";
import { LoginSchemaType } from "../(auth)/login/_components/login-form";
import { RegistrationFormType } from "../(auth)/register/_components/registration-form";
import { signIn, signOut } from "../../lib/auth";

export const loginWithCredintial = async (props: LoginSchemaType) => {
  try {
    await signIn("credentials", { ...props, redirect: false });
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.cause?.err instanceof Error) {
        return error.cause.err.message; // return "custom error"
      }
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials";
        default:
          return "Something went wrong";
      }
    }
    return error;
  }
};

export const userRegistration = async (props: RegistrationFormType) => {
  try {
    const { firstName, lastName, email, password } = props;
    const name = firstName + " " + lastName;

    const response = await fetch(
      `${process.env.BASE_URL}/api/v1/auth/register`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      }
    );

    console.log(response);

    return await response.json();
  } catch (error: any) {
    console.log(await error.json());
    throw error;
  }
};

export const logout = async () => {
  await signOut();
};
