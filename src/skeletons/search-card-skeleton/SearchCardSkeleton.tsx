const SearchCardSkeleton = () => {
  return (
    <div className="shadow-md w-full">
      <div className="h-28 md:h-40 animate-pulse w-full rounded-t-md bg-gray-300"></div>
      <div className="flex bg-gray-100 p-3 flex-col justify-evenly h-24 gap-3 rounded-b-md">
        <div className="h-2 w-full rounded-sm animate-pulse bg-gray-300" />
        <div className="h-2 w-1/2 rounded-sm animate-pulse bg-gray-300" />
        <div className="h-2 w-full rounded-sm animate-pulse bg-gray-300" />
        <div className="h-2 w-3/12 rounded-sm animate-pulse bg-gray-300" />
      </div>
    </div>
  );
};

export default SearchCardSkeleton;
