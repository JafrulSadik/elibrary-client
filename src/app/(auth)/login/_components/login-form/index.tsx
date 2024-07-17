"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { loginWithCredintial } from "../../../../action";

const LoginSchema = z.object({
  email: z.string().min(1, "* Email is requried").email(),
  password: z.string().min(1, "* Password is required"),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;

const LoginForm = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) });

  const notify = () =>
    toast.success("Login successfull", {
      style: {
        border: "1px solid #713200",
        padding: "16px",
        width: "600px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });

  const onSubmit: SubmitHandler<LoginSchemaType> = async (formData) => {
    try {
      const response: any = await loginWithCredintial(formData);
      if (!!response) {
        setError("root", {
          message: response,
        });
      } else {
        notify();
        router.refresh();
      }
    } catch (error: any) {
      setError("root", {
        message: "Something went wrong.",
      });
    }
  };

  return (
    <form
      action=""
      className="flex flex-col gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-1 text-base">
        <label>Email</label>
        <input
          type="text"
          className="p-2 rounded-md border-[0.5px] outline-none border-gray-200 font-base text-sm"
          placeholder="Enter email"
          {...register("email")}
        />
      </div>
      {errors.email && (
        <p className="text-red-800 text-xs font-semibold">
          {errors.email.message}
        </p>
      )}
      <div className="flex flex-col gap-1 text-base pb-2">
        <label htmlFor="">Password</label>
        <input
          className="p-2 rounded-md border-[0.5px] outline-none border-gray-200 font-base text-sm"
          type="password"
          placeholder="Enter password"
          {...register("password")}
        />
      </div>
      {errors.password && (
        <p className="text-red-800 text-xs font-semibold mb-1">
          {errors.password.message}
        </p>
      )}

      {errors.root && (
        <p className="text-red-800 text-xs font-semibold mb-1">
          {errors.root.message}
        </p>
      )}
      <button
        className="w-full p-2 text-white border bg-crusta-950  rounded-md"
        type="submit"
      >
        Sign In
      </button>
      <p className="text-sm text-center my-4">
        Don't have an account ? <Link href="/register">Register</Link>
      </p>
    </form>
  );
};

export default LoginForm;
