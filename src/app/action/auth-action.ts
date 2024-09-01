"use server";
import { RegistrationFormType } from "../(auth)/register/_components/registration-form";
import { signOut } from "../../lib/auth";

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

    return await response.json();
  } catch (error: any) {
    throw new error();
  }
};

export const logout = async () => {
  await signOut();
};
