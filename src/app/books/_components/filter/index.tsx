type Props = {
  handleSortBy: Function;
  handleSortType: Function;
};

const FilterSect = (props: Props) => {
  const { handleSortBy, handleSortType } = props;

  return (
    <div className="flex flex-col gap-1 md:flex-row items-center justify-between w-full ">
      <h1 className="flex font-semibold text-sm md:text-base md:justify-between">
        Showing 125 books for{" "}
      </h1>
      <div className="flex flex-col gap-2 text-xs md:text-sm md:flex-row">
        <div className="flex items-center gap-2">
          <div className="border-r border-gray-200 pr-2">Sort by</div>
          <select
            className="border border-gray-300 rounded-md outline-none py-1 px-3"
            onChange={(event) => handleSortBy(event.target.value)}
          >
            <option value="" className="p-5">
              default
            </option>
            <option value="updatedAt" className="p-5">
              date
            </option>
            <option value="rating">rating</option>
            <option value="downloads">downloads</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <div className="border-r border-gray-200 pr-2">Sort Type</div>
          <select
            className="border border-gray-300 rounded-md outline-none py-1 px-3"
            onChange={(event) => handleSortType(event.target.value)}
          >
            <option value="" className="p-5">
              default
            </option>
            <option value="asc" className="p-5">
              asc
            </option>
            <option value="dec">dec</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterSect;
