import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import ProfileImg from "../../../../public/images/user/writer-1.png";
import { auth } from "../../../lib/auth";

const Profile = async () => {
  const session = await auth();

  return (
    <div className="flex flex-col items-center p-8 rounded-md border bg-white border-gray-300 md:min-h-[100vh]">
      <div className="flex flex-col w-full ml-2 font-semibold text-left">
        <div className="flex text-sm items-center">
          <Link href="/dashboard/">Dashboard</Link>
          {<MdKeyboardArrowRight size={15} />}
          <Link href={"/dashboard/my-books"} className="font-normal">
            Profile
          </Link>
        </div>
      </div>
      <hr className="w-full bg-black m-3" />

      {/* Body Sect */}
      <div className="w-full my-4">
        <h1 className="text-center font-semibold text-2xl my-6">Profile</h1>
        {/* Image Sect */}
        <div className="flex w-full justify-center">
          <Image
            src={ProfileImg}
            height={150}
            width={150}
            alt="profile.img"
            className="border border-crusta-950 rounded-full"
          />
        </div>

        {/* Data Sect */}
        <div className="w-full mt-14 mb-8">
          <div className="text-base">
            <p className="font-semibold my-2">Full Name</p>
            <p className="p-3 bg-gray-100 rounded-lg text-gray-600 text-sm">
              {session?.user?.name}
            </p>
          </div>

          <div className="text-base">
            <p className="font-semibold my-2">Email</p>
            <p className="p-3 bg-gray-100 rounded-lg text-gray-600 text-sm">
              {session?.user?.email}
            </p>
          </div>

          <div className="text-base">
            <p className="font-semibold my-2">About You</p>
            {session?.user?.about && (
              <p className="p-3 bg-gray-100 rounded-lg text-gray-600 text-sm text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                velit, reiciendis doloremque laboriosam ea aliquid cum, placeat
                vel necessitatibus id consequuntur illum beatae quas eligendi
                quia quos. Quo quam quisquam, neque amet corporis rem, maiores
                possimus distinctio iste debitis voluptate! Ducimus quam
                provident unde, tenetur vero placeat cum nostrum tempore.
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-center gap-2 my-3">
          <Link
            href=""
            className="px-8 py-2 text-white  rounded-md bg-black hover:bg-[#242424]"
          >
            Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
