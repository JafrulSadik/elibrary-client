import Image from "next/image";
import WriterImg from "../../../../public/images/writers/writer-3.png";

const WriterCard1 = () => {
  return (
    <div className="flex flex-col gap-5 p-5 max-w-72 bg-crusta-350 rounded-lg">
      <div className="flex flex-1 justify-center p-5">
        <Image src={WriterImg} alt="" />
      </div>
      <div className="flex flex-col flex-1 items-center gap-1">
        <h1 className="text-sm md:text-base font-bold text-crusta-950">
          Symon Alex
        </h1>
        <p className="text-xs md:text-sm font-normal text-soft-peach-950">
          Total Books : 15
        </p>
        <p className="text-xs md:text-sm font-normal text-soft-peach-950">
          Total Downloads : 1000
        </p>
      </div>
    </div>
  );
};

export default WriterCard1;
