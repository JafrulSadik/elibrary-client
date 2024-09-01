import PopularCategory from "../popular-category";
import RatingFilter from "../rating-filter";
import TopWriters from "../top-writers";

const SideBar = () => {
  // const genre = await getAllGenre()

  return (
    <div className=" rounded-md border border-gray-300  min-h-[840px] p-5">
      {/* Popular Cateogry */}
      <div className="">
        <h1 className="text-center text-sm font-semibold my-2 ">
          Popular Genre
        </h1>
        <hr className="bg-gray-300 h-[0.5px] my-1 " />
        <PopularCategory />
      </div>

      {/* Top Writers */}
      <div>
        <h1 className="text-center text-sm font-semibold my-2">Best Writers</h1>
        <hr className="bg-gray-300 h-[0.5px] my-1" />
        <TopWriters />
      </div>

      {/* Ratings */}
      <div>
        <h1 className="text-center text-sm font-semibold my-2">
          Rating Filter
        </h1>
        <hr className="bg-gray-300 h-[0.5px] my-1" />
        <RatingFilter />
      </div>
    </div>
  );
};

export default SideBar;
