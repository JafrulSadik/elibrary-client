import { dateFormat } from "../../../../../../lib/date-format";
import { Book } from "../../../../../../types/Book";

type Props = {
  book: Book;
};

const Specification = (props: Props) => {
  const { book } = props;

  const date = dateFormat({ dateString: book.createdAt });

  return (
    <div className="text-xs md:text-sm grid grid-cols-[repeat(2,_minmax(auto,_auto))]  gap-x-4 md:gap-x-6 px-3">
      <div className="py-1 rounded-sm">
        <p className="font-semibold">Title</p>
      </div>
      <div className="py-1">
        <p className="text-justify">{book.title}</p>
      </div>

      <div className="py-1 rounded-sm">
        <p className="font-semibold">Author</p>
      </div>
      <div className="py-1">
        <p>{book.author.name}</p>
      </div>

      <div className="py-1 rounded-sm">
        <p className="font-semibold">Published</p>
      </div>
      <div className="py-1">
        <p>{date}</p>
      </div>

      <div className="py-1 rounded-sm">
        <p className="font-semibold">Language</p>
      </div>
      <div className="py-1">
        <p>Unknown</p>
      </div>
    </div>
  );
};

export default Specification;
