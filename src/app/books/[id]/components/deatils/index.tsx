import Author from "../author";
import Specification from "../specification";
import Summery from "../summery";

type Props = {
  option: string;
};

const Details = (props: Props) => {
  const { option } = props;

  switch (option) {
    case "summery":
      return <Summery />;
    case "spec":
      return <Specification />;
    case "author":
      return <Author />;
    default:
      return <Summery />;
  }
};

export default Details;
