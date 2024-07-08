import RegisterForm from "./components";

const page = () => {
  return (
    <div className="flex min-h-[90vh] justify-center items-center bg-[#f5f5f5]">
      <div className="p-5 w-[80%] max-w-[450px] border-[0.5px] border-gray-300 rounded-md shadow-md py-10 my-20 bg-white">
        <h1 className="text-2xl lg:text-3xl text-center mb-6">Register</h1>
        <RegisterForm />
      </div>
    </div>
  );
};

export default page;
