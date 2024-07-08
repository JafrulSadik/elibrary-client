import Link from "next/link";

const RegisterForm = () => {
  return (
    <form action="" className="flex flex-col">
      <div className=" flex flex-col gap-1 text-sm md:text-base">
        <label>First Name</label>
        <input
          type="text"
          className=" p-2 md:p-2 rounded-sm border-[0.5px] outline-none border-gray-200 font-base mb-4"
          placeholder="Enter first name"
        />
      </div>
      <div className=" flex flex-col gap-1 text-base">
        <label>Last Name</label>
        <input
          type="text"
          className="p-2 rounded-sm border-[0.5px] outline-none border-gray-200 font-base  mb-4"
          placeholder="Enter last name"
        />
      </div>
      <div className=" flex flex-col gap-1 text-base">
        <label>Email</label>
        <input
          type="text"
          className="p-2 rounded-sm border-[0.5px] outline-none border-gray-200 font-base  mb-4"
          placeholder="Enter email"
        />
      </div>
      <div className=" flex flex-col gap-1 text-base">
        <label htmlFor="">Password</label>
        <input
          className="p-2 rounded-sm border-[0.5px] outline-none border-gray-200 font-base mb-4"
          type="password"
          placeholder="Enter password"
        />
      </div>
      <button className="w-full p-2 text-white bg-peace-400 rounded-sm">
        Sign Up
      </button>
      <p className="text-sm text-center my-4">
        Don't have an account ? <Link href="/auth/login">login</Link>
      </p>
    </form>
  );
};

export default RegisterForm;
