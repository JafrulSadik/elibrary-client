import { useState } from "react";

const categories = [
  {
    title: "History",
    link: "history",
  },
  {
    title: "War",
    link: "war",
  },
  {
    title: "Fiction",
    link: "fiction",
  },
  {
    title: "Educational",
    link: "educational",
  },
  {
    title: "Fantasy",
    link: "fantasy",
  },
  {
    title: "Romantic",
    link: "romantic",
  },
  {
    title: "Poetry",
    link: "poetry",
  },
  {
    title: "Non Fiction",
    link: "non-fiction",
  },
  {
    title: "Drama",
    link: "drama",
  },
  {
    title: "Religion",
    link: "religion",
  },
];

const Category = () => {
  const [selected, setCategory] = useState("history");

  return (
    <div className="grid w-[90%] max-w-7xl flex-wrap my-10 gap-10 lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
      {categories.map((category, index) => (
        <div
          className={`flex justify-center items-center rounded-lg w-full h-16  ${
            category.link === selected
              ? "bg-gradient-to-t from-crusta-400 to-crusta-700"
              : "border-[2px] hover:border-crusta-900 hover:text-crusta-950 border-crusta-500 text-crusta-500 hover:bg-gradient-to-t from-crusta-400 to-crusta-700"
          }`}
          key={index}
          onClick={() => setCategory(category.link)}
        >
          {category.title}
        </div>
      ))}
    </div>
  );
};

export default Category;
