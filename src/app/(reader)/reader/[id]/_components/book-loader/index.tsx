type Props = {
  width: number;
};

const BookLoader = (props: Props) => {
  const { width } = props;
  console.log({ width });
  return (
    <div className={`flex justify-center items-center `}>
      {width ? (
        <div
          className={`flex justify-center items-center rounded-md animate-pulse w-[${width}px] bg-gray-100 h-[100vh]`}
        >
          Loading...
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BookLoader;
