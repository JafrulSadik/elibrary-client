const BookSpec = () => {
  return (
    <div className="flex flex-col items-center max-w-7xl w-[90%] shadow-sm rounded-md py-14 mb-10 border border-gray-200">
      {/* Book Specification */}
      <div className="w-[90%] flex flex-col">
        <h1 className="text-2xl text-center mb-2">
          Book Specification & Summary
        </h1>
        {/* Description Sect */}
        <div className="flex flex-col mt-3">
          <div>
            <div className="flex gap-2">
              <div className="p-2 text-white rounded-t-md bg-peace-400">
                Summery
              </div>
              <div className="py-2 px-4 text-peace-400 hover:bg-crusta-100 rounded-t-md">
                Spec
              </div>
              <div className="py-2 px-4 text-peace-400 hover:bg-crusta-100 rounded-t-md">
                Author
              </div>
            </div>
            <div className="flex justify-center w-full">
              <div className="h-[0.2px] w-full bg-peace-400" />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-5">
          <p className="text-sm md:text-base text-justify">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. <br /> <br /> Many
            desktop publishing packages and web page editors now use Lorem Ipsum
            as their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookSpec;
