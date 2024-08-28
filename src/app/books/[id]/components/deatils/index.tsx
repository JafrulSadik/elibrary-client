import { Book } from "../../../../../types/Book";
import Author from "../author";
import Specification from "../specification";
import Summery from "../summery";

type Props = {
  option: string;
  book: Book;
};

const Details = (props: Props) => {
  const { option, book } = props;

  switch (option) {
    case "summery":
      return <Summery book={book} />;
    case "spec":
      return <Specification book={book} />;
    case "author":
      return <Author book={book} />;
    default:
      return <Summery book={book} />;
  }
};

export default Details;
