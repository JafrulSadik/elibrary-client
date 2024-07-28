import DescriptionSect from "../description-sect";

const BookSpec = () => {
  return (
    <div className="flex flex-col items-center max-w-7xl w-[90%] shadow-sm rounded-md py-14 mb-10 border border-gray-200">
      {/* Book Specification */}
      <div className="w-[90%] flex flex-col">
        <h1 className="text-2xl text-center mb-2">
          Book Specification & Summary
        </h1>
        {/* Description Sect */}
        <DescriptionSect />
      </div>
    </div>
  );
};

export default BookSpec;
