import Image from "next/image";
import Link from "next/link";
import { auth, signOut } from "../../lib/auth";
import LogoutBtn from "../logout-btn";
import Logo from "./../../../public/images/logo3.png";
import MobileMenu from "./MobileMenu";
import ProfileBtn from "./ProfileBtn";
import SearchForm from "./SearchForm";

const Navbar = async () => {
  const session = await auth();

  const handleLogout = async (event: React.MouseEvent<HTMLButtonElement>) => {
    await signOut();
  };

  return (
    <div className="flex justify-center w-full bg-crusta-950">
      <div className="hidden max-w-7xl w-[90%]  lg:flex container justify-between items-center h-24">
        {/* Left Section */}
        <div className="flex-1">
          <Link
            href="/"
            className="flex items-center gap-2 text-crusta-300 text-[16px]  font-bold text-lg  "
          >
            <Image src={Logo} height={30} width={20} alt="logo.jpg" />
            <span className="uppercase">e-library</span>
          </Link>
        </div>

        {/* Middle Section */}
        <div className="hidden md:block flex-1 ">
          <SearchForm />
        </div>

        {/* Right Section */}
        <div className="flex justify-end flex-1  gap-2">
          {session?.user ? (
            <div className="flex gap-8 items-center">
              <ProfileBtn user={session ? session?.user : ""} />
              <LogoutBtn />
            </div>
          ) : (
            <>
              <Link
                href="/login"
                type="submit"
                className="flex justify-center items-center px-6 h-10 font-normal text-crusta-400 hover:border border-crusta-400 rounded-md"
              >
                Login
              </Link>
              <Link
                href="/register"
                type="submit"
                className="flex justify-center items-center px-6 h-10 text-white rounded-md font-normal bg-gradient-to-b from-crusta-500 to-crusta-600 hover:bg-none hover:text-crusta-600 hover:border border-crusta-600"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>

      <div className="h-16 w-full lg:hidden">
        <MobileMenu user={session ? session?.user : ""} />
      </div>
    </div>
  );
};

export default Navbar;
