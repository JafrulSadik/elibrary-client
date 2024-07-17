import Image from "next/image";
import WriterImg from "./writer2.png";

type Props = {
  className?: string;
  height?: number;
  width?: number;
};

const WriterImgTwo = (props: Props) => {
  return <Image src={WriterImg} alt="" {...props} />;
};

export default WriterImgTwo;
