import { redirect } from "next/navigation";
import { auth } from "../../../lib/auth";
import LoginForm from "./_components/login-form";

const page = async () => {
  const session = await auth();
  if (session?.user) {
    redirect("/");
  }

  return (
    <div className="flex min-h-[90vh] justify-center items-center bg-[#f5f5f5]">
      <div className="p-5 w-[80%] max-w-96 border-[0.5px] border-gray-300 rounded-lg shadow-md py-10 my-20 bg-white">
        <h1 className="text-2xl lg:text-3xl text-center mb-6">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
