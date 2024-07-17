"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { logout } from "../../app/action";

const LogoutBtn = () => {
  const router = useRouter();
  const notify = () => {
    toast.success("Logout successfully", {
      style: {
        border: "1px solid #713200",
        padding: "16px",
        maxWidth: "600px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });
  };

  const handleLogout = async () => {
    await logout();
    notify();
    router.push("/");
  };
  return (
    <form action={handleLogout}>
      <button
        type="submit"
        className="flex justify-center items-center px-6 h-10 text-white rounded-md font-normal bg-gradient-to-b from-crusta-500 to-crusta-600 hover:bg-none hover:text-crusta-600 hover:border border-crusta-600"
      >
        Logout
      </button>
    </form>
  );
};

export default LogoutBtn;
