"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { RiLoader2Line } from "react-icons/ri";
import { z } from "zod";
import { userRegistration } from "../../../../action";

const RegistraionFormSchema = z
  .object({
    firstName: z.string().min(3, "Name must be at least 3 characters long"),
    lastName: z.string(),
    email: z.string().min(1, "* Email is requried").email(),
    password: z
      .string()
      .min(1, "Password is required")
      .refine((val) => val.length >= 8, {
        message: "Password must be at least 8 characters long",
      })
      .refine((val) => /[a-z]/.test(val), {
        message: "Password must contain at least one lowercase letter",
      })
      .refine((val) => /[A-Z]/.test(val), {
        message: "Password must contain at least one uppercase letter",
      })
      .refine((val) => /[0-9]/.test(val), {
        message: "Password must contain at least one number",
      })
      .refine((val) => /[^a-zA-Z0-9]/.test(val), {
        message: "Password must contain at least one special character",
      }),
    confirmPassword: z.string().min(1, "Confirm password field is required."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type RegistrationFormType = z.infer<typeof RegistraionFormSchema>;

const RegisterForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const notify = () => {
    toast.success("Signup successfull. Please login.", {
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
  };

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<RegistrationFormType>({
    resolver: zodResolver(RegistraionFormSchema),
  });

  const onSubmit: SubmitHandler<RegistrationFormType> = async (formData) => {
    try {
      setLoading(true);
      const response = await userRegistration(formData);
      if (response.code === 201) {
        notify();
        router.push("/login");
      } else {
        setError("root", {
          message: response.message,
        });
      }
      setLoading(false);
    } catch (error: any) {
      setError("root", {
        message: error.message,
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
        <label>First Name</label>
        <input
          type="text"
          className="p-2 rounded-md border-[0.5px] outline-none border-gray-200 font-base text-sm"
          placeholder="Enter first name"
          {...register("firstName")}
        />
      </div>
      {errors.firstName && (
        <p className="text-red-800 text-xs font-semibold">
          {errors.firstName.message}
        </p>
      )}
      <div className="flex flex-col gap-1 text-base">
        <label>Last Name</label>
        <input
          type="text"
          className="p-2 rounded-md border-[0.5px] outline-none border-gray-200 font-base text-sm"
          placeholder="Enter last name"
          {...register("lastName")}
        />
      </div>
      {errors.lastName && (
        <p className="text-red-800 text-xs font-semibold">
          {errors.lastName.message}
        </p>
      )}
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
      <div className="flex flex-col gap-1 text-base">
        <label htmlFor="">Password</label>
        <input
          className="p-2 rounded-md border-[0.5px] outline-none border-gray-200 font-base text-sm"
          type="password"
          placeholder="Enter password"
          {...register("password")}
        />
      </div>
      <div className="flex flex-col gap-1 text-base">
        <label htmlFor="">Confirm Password</label>
        <input
          className="p-2 rounded-md border-[0.5px] outline-none border-gray-200 font-base text-sm"
          type="password"
          placeholder="Enter confirm password"
          {...register("confirmPassword")}
        />
      </div>
      {!errors.password && !errors.root ? (
        <p className="text-[#212121] text-xs font-medium mb-1 py-1 text-justify">
          Password must be at least 8 characters long also include at least one
          lowercase letter, one uppercase letter, one digit and one special
          character (e.g., @, #, $, %, &, *, etc.).
        </p>
      ) : (
        ""
      )}
      {errors.password && (
        <p className="text-red-800 text-xs font-semibold mb-1">
          {errors.password.message}
        </p>
      )}
      {errors.confirmPassword && (
        <p className="text-red-800 text-xs font-semibold mb-1">
          {errors.confirmPassword.message}
        </p>
      )}

      {errors.root && (
        <p className="text-red-800 text-xs font-semibold mb-2">
          {errors.root.message}
        </p>
      )}
      <button
        className={`w-full flex justify-center items-center gap-2 p-2 text-white border ${
          loading ? "bg-crusta-200" : "bg-crusta-950"
        }  rounded-md`}
        type="submit"
        disabled={loading}
      >
        {loading && <RiLoader2Line className="animate-spin" size={16} />}
        <span>Sign Up</span>
      </button>
      <p className="text-sm text-center my-4">
        Already have an account ? <Link href="/login">Login</Link>
      </p>
    </form>
  );
};

export default RegisterForm;
