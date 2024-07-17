import RegisterForm from "./_components/registration-form";

const page = () => {
  return (
    <div className="flex min-h-[100vh] justify-center items-center bg-[#f5f5f5]">
      <div className="px-6 w-[80%] max-w-[500px] border-[0.5px] border-gray-200 rounded-md shadow-sm py-10 my-14 bg-white">
        <h1 className="text-2xl lg:text-3xl text-center mb-6">Register</h1>
        <RegisterForm />
      </div>
    </div>
  );
};

export default page;
