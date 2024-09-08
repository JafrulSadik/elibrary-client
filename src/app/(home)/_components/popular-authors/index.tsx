import WriterCard from "../../../../components/writer-card";
import { popularAuthor } from "../../../action/user-action";

const PopularAuthors = async () => {
  const response = await popularAuthor({ limit: 3 });
  const authors = response.data;
  return (
    <div className="flex flex-col items-center bg-crusta-950 pt-8 pb-14 w-full">
      {/* Vertical line design */}
      <div className="h-2 w-8 mb-8 rounded bg-gradient-to-t from-crusta-700 to-crusta-400" />
      <h1 className="text-xl md:text-3xl text-white font-extrabold tracking-tighter">
        Top Writers
      </h1>
      <div className="flex flex-wrap justify-center gap-10 lg:gap-14 max-w-7xl w-[90%] my-9 px-5 md:px-20">
        {authors &&
          authors.map((author) => (
            <WriterCard key={author._id} author={author} />
          ))}
      </div>
    </div>
  );
};

export default PopularAuthors;
