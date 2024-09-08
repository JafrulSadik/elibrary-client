import Image from "next/image";
import AltImage from "../../assets/Images/ProfileImg/image.png";
import { PopularAuthorType } from "../../types/User";

type Props = {
  author: PopularAuthorType;
};

const WriterCard = (props: Props) => {
  const { author } = props;
  const { name, profileImg, totalBooks, totalDownloads } = author;
  return (
    <div className="flex flex-col gap-5 p-5 max-w-72 bg-crusta-350 rounded-lg">
      <div className="flex flex-1 justify-center p-5">
        <Image
          src={profileImg ? profileImg : AltImage}
          className="object-cover rounded-full size-52 border border-crusta-300"
          width={300}
          height={300}
          quality={100}
          alt=""
        />
      </div>
      <div className="flex flex-col flex-1 items-center gap-1">
        <h1 className="text-sm md:text-base font-bold text-crusta-950">
          {name}
        </h1>
        <p className="text-xs md:text-sm font-normal text-soft-peach-950">
          Total Books : {totalBooks}
        </p>
        <p className="text-xs md:text-sm font-normal text-soft-peach-950">
          Total Downloads : {totalDownloads}
        </p>
      </div>
    </div>
  );
};

export default WriterCard;
