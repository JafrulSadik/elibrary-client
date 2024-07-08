import Image from "next/image";
import { FiInstagram, FiYoutube } from "react-icons/fi";
import { RiFacebookCircleLine } from "react-icons/ri";
import Logo from "../../../public/images/logo.png";

const Footer = () => {
  return (
    <div className="flex justify-center py-14 bg-[#222222] ">
      <div className="max-w-7xl w-[90%] md:flex  gap-14 text-xs  md:text-base  font-normal">
        {/* Left */}
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex items-center h-14 gap-3">
            <Image src={Logo} alt="" height={25} width={25} />
            <h1 className=" font-semibold tracking-tight uppercase text-white">
              e-library
            </h1>
          </div>

          <h1 className="text-white">
            Unlock a World of Knowledge With Our Extensive Collection of
            High-Quality PDF Books Across Various Categories.
          </h1>

          <div className="flex gap-3 items-center">
            <h1 className="text-white ">Follow Us : </h1>
            <RiFacebookCircleLine size={22} className="text-white" />
            <FiYoutube size={22} className="text-white" />
            <FiInstagram size={20} className="text-white" />
          </div>
        </div>

        {/* Center */}
        <div className="flex flex-col flex-1 text-white gap-4">
          <div className=" flex items-center h-14">
            <h1>Contact Us :</h1>
          </div>
          <h3>House #4, Road # 47, Dhanmondi, Dhaka-1212.</h3>
          <h3>Email: elibrary@info.co</h3>
        </div>

        {/* Right */}
        <div className="flex flex-1 flex-col text-white gap-4">
          <div className=" flex items-center h-14">
            <h1>Let Us Help You :</h1>
          </div>
          <div>
            <h1>Your Profile</h1>
            <h1>Terms & Condition</h1>
            <h1>FAQ</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
