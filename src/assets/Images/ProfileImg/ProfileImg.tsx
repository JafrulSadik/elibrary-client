import Image from "next/image";
import ProfilePic from "./image.png";

type Props = {
  styles: string | null;
};

const ProfileImg = (props: Props) => {
  const { styles } = props;
  return (
    <Image
      src={ProfilePic}
      height={100}
      width={100}
      alt="Profile image"
      className={styles || ""}
    />
  );
};

export default ProfileImg;
