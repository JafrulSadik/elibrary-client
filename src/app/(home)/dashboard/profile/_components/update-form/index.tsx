import Link from "next/link";
import AboutSect from "../about-sect";
import ImageSect from "../image-sect";
import NameSect from "../name-sect";

const UpdateFrom = ({ session }: any) => {
  return (
    <div className="w-full my-4">
      <h1 className="text-center font-semibold text-2xl my-6">Profile</h1>
      {/* Image Sect */}
      <div className="flex w-full justify-center">
        <ImageSect />
      </div>

      {/* Data Sect */}
      <div className="w-full mt-14 mb-8">
        <NameSect name={session?.user?.name} />

        <div className="text-base">
          <p className="font-semibold my-2">Email</p>
          <p className="p-3 bg-gray-100 rounded-lg text-gray-600 text-sm">
            {session?.user?.email}
          </p>
        </div>

        <AboutSect about={session?.user?.about} />
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
  );
};

export default UpdateFrom;
