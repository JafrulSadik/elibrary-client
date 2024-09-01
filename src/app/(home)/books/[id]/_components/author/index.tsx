import WriterRandomImage from "../../../../../../../public/images/writers/random-image";
import { Book } from "../../../../../../types/Book";

type Props = {
  book: Book;
};
const Author = (props: Props) => {
  const { book } = props;
  return (
    <div className="flex flex-col md:flex-row gap-3 text-base">
      <div className="m-auto p-3 rounded-md  border-[10px] border-gray-100 shadow-sm">
        <WriterRandomImage height={200} width={200} className="rounded-sm" />
      </div>
      <div className="flex flex-col text-sm p-3 rounded-md  border-[10px] border-gray-100 shadow-sm gap-2">
        <div className="flex flex-col">
          <span className="font-semibold">Name</span>
          <span className="capitalize">{book.author.name}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">About</span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae nam
            repellendus officia in dolor quia voluptate quos corrupti natus
            ipsam!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Author;
