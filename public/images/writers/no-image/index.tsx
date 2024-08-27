import Image from "next/image";
import WriterImg from "./image.png";

type Props = {
  className?: string;
  height?: number;
  width?: number;
};

const WriterMocImage = (props: Props) => {
  return <Image src={WriterImg} alt="" {...props} />;
};

export default WriterMocImage;
