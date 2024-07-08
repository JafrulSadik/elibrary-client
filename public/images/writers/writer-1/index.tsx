import Image from "next/image";
import WriterImg from "./writer-1.png";

type Props = {
  className?: string;
  height?: number;
  width?: number;
};

const WriterImgOne = (props: Props) => {
  console.log(props);
  return <Image src={WriterImg} alt="" {...props} />;
};

export default WriterImgOne;
