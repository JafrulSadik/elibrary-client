import { Genre } from "../../../../types/Genre";

type Props = {
  handleSelect: Function;
  genres: Genre[];
  selectedGenre: Genre;
};

const Category = (props: Props) => {
  const { handleSelect, genres, selectedGenre } = props;

  return (
    <div className="grid w-[90%] max-w-7xl flex-wrap my-10 gap-10 lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
      {genres.map((genre, index) => (
        <div
          className={`flex justify-center items-center rounded-lg w-full h-16  ${
            genre._id === selectedGenre._id
              ? "bg-gradient-to-t from-crusta-400 to-crusta-700"
              : "border-[2px] hover:border-crusta-900 hover:text-crusta-950 border-crusta-500 text-crusta-500 hover:bg-gradient-to-t from-crusta-400 to-crusta-700"
          }`}
          key={index}
          onClick={() => handleSelect({ genre })}
        >
          {genre.title}
        </div>
      ))}
    </div>
  );
};

export default Category;
