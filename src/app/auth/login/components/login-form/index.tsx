import Link from "next/link";

const LoginForm = () => {
  return (
    <form action="" className="flex flex-col">
      <div className="flex flex-col gap-1 text-base">
        <label>Email</label>
        <input
          type="text"
          className="p-2 rounded-sm border-[0.5px] outline-none border-gray-200 font-base text-sm mb-4"
          placeholder="Enter email"
        />
      </div>
      <div className="flex flex-col gap-1 text-base">
        <label htmlFor="">Password</label>
        <input
          className="p-2 rounded-sm border-[0.5px] outline-none border-gray-200 font-base text-sm mb-4"
          type="password"
          placeholder="Enter password"
        />
      </div>
      <button className="w-full p-2 text-white bg-peace-400 rounded-sm">
        Sign In
      </button>
      <p className="text-sm text-center my-4">
        Don't have an account ? <Link href="/auth/register">register</Link>
      </p>
    </form>
  );
};

export default LoginForm;
