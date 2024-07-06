import Image from "next/image";
import WriterImg from "../../public/images/writers/writer-3.png";

const WriterCard = () => {
  return (
    <div className="max-w-72 p-10 bg-crusta-350 rounded-lg">
      <div className="flex justify-center mb-5 px-5">
        <Image src={WriterImg} alt="" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <h1 className="font-bold text-crusta-950">Symon Alex</h1>
        <p className="text-sm font-normal text-soft-peach-950">
          Total Books : 15
        </p>
        <p className="text-sm font-normal text-soft-peach-950">
          Total Downloads : 1000
        </p>
      </div>
    </div>
  );
};

export default WriterCard;
