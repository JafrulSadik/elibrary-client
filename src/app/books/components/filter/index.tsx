const FilterSect = () => {
  return (
    <>
      <h1 className="font-semibold">Showing 125 books for </h1>
      <div className="flex gap-3 text-sm">
        <div className="flex items-center gap-2">
          <div className="border-r border-gray-200 pr-2">Sort by</div>
          <select className="border border-gray-300 rounded-md outline-none py-1 px-3">
            <option selected={true} value="updatedAt" className="p-5">
              default
            </option>
            <option value="updatedAt" className="p-5">
              date
            </option>
            <option value="updatedAt">rating</option>
            <option value="updatedAt">downloads</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <div className="border-r border-gray-200 pr-2">Sort Type</div>
          <select className="border border-gray-300 rounded-md outline-none py-1 px-3">
            <option value="updatedAt" selected={true} className="p-5">
              default
            </option>
            <option value="updatedAt" className="p-5">
              asc
            </option>
            <option value="updatedAt">dec</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default FilterSect;
