const HomeCardSkeleton = () => {
  return (
    <div className="shadow-md">
      <div className=" bg-gray-300 md:h-40 animate-pulse w-full rounded-t-md"></div>
      <div className="flex p-3 flex-col justify-evenly h-24 gap-3 bg-white rounded-b-md">
        <div className="h-2 w-full rounded-sm animate-pulse bg-gray-200" />
        <div className="h-2 w-1/2 rounded-sm animate-pulse bg-gray-200" />
        <div className="h-2 w-full rounded-sm animate-pulse bg-gray-200" />
        <div className="h-2 w-3/12 rounded-sm animate-pulse bg-gray-200" />
      </div>
    </div>
  );
};

export default HomeCardSkeleton;
