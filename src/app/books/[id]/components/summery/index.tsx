import { Book } from "../../../../../types/Book";

type Props = {
  book: Book;
};

const Summery = (props: Props) => {
  const { book } = props;
  return (
    <div className="">
      <p className="text-sm md:text-base text-justify">
        {book ? book.description : ""}
      </p>
    </div>
  );
};

export default Summery;
