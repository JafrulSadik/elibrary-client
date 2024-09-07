import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { auth } from "../../../../lib/auth";
import { getUserProfile } from "../../../action/user-action";
import UpdateFrom from "./_components/update-form";

const Profile = async () => {
  const session = await auth();

  const response = await getUserProfile();

  const user = response.data;

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
      <UpdateFrom user={user} />
    </div>
  );
};

export default Profile;
