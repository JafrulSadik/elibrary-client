import { User } from "../../../../../../types/User";
import AboutSect from "../about-sect";
import ImageSect from "../image-sect";
import NameSect from "../name-sect";

type Props = {
  user: User;
};

const UpdateForm = (props: Props) => {
  const { user } = props;
  return (
    <div className="w-full my-4">
      <h1 className="text-center font-semibold text-2xl my-6">Profile</h1>
      {/* Image Sect */}
      <div className="flex w-full justify-center">
        <ImageSect profileImg={user.profileImg} />
      </div>

      {/* Data Sect */}
      <div className="w-full mt-14 mb-8">
        <NameSect name={user?.name} />

        <div className="text-base">
          <p className="font-semibold my-2">Email</p>
          <p className="p-3 bg-gray-100 rounded-lg text-gray-600 text-sm">
            {user?.email}
          </p>
        </div>

        <AboutSect about={user?.about} />
      </div>
    </div>
  );
};

export default UpdateForm;
