import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FaRegStar, FaStar } from "react-icons/fa";

const RatingFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedRatings = searchParams.get("ratings")?.split(",");

  const handleRating = (rating: string) => {
    const params = new URLSearchParams(searchParams);

    const paramRatings = params.get("ratings");
    let updatedRatings = "";

    if (paramRatings) {
      const prevRatings = paramRatings.split(",");
      if (prevRatings.includes(rating)) {
        const filteredRatings = prevRatings.filter((item) => item !== rating);
        updatedRatings = filteredRatings.join(",");
      } else {
        const updatedGRatingsArray = [...prevRatings, rating];
        updatedRatings = updatedGRatingsArray.join(",");
      }
    } else {
      updatedRatings = rating;
    }

    if (updatedRatings) {
      params.set("ratings", updatedRatings);
    } else {
      params.delete("ratings");
    }

    const url = `${pathname}?${params.toString()}`;

    router.push(url);
    router.refresh();
  };

  return (
    <div className="text-sm">
      <div>
        <div className="flex items-center px-3 gap-2 py-1">
          <input
            onChange={() => handleRating("5")}
            checked={selectedRatings?.includes("5")}
            type="checkbox"
            className="accent-peace-400"
          />
          <div className="flex text-crusta-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <hr className="bg-gray-300 h-[0.5px] my-1" />
      </div>
      <div>
        <div className="flex items-center px-3 gap-2 py-1">
          <input
            onChange={() => handleRating("4")}
            checked={selectedRatings?.includes("4")}
            type="checkbox"
            className="accent-peace-400 "
          />
          <div className="flex text-crusta-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </div>
        </div>
        <hr className="bg-gray-300 h-[0.5px] my-1" />
      </div>
      <div>
        <div className="flex items-center px-3 gap-2 py-1">
          <input
            onChange={() => handleRating("3")}
            checked={selectedRatings?.includes("3")}
            type="checkbox"
            className="accent-peace-400 "
          />
          <div className="flex text-crusta-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </div>
        </div>
        <hr className="bg-gray-300 h-[0.5px] my-1" />
      </div>
      <div>
        <div className="flex items-center px-3 gap-2 py-1">
          <input
            onChange={() => handleRating("2")}
            checked={selectedRatings?.includes("2")}
            type="checkbox"
            className="accent-peace-400 "
          />
          <div className="flex text-crusta-400">
            <FaStar />
            <FaStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </div>
        </div>
        <hr className="bg-gray-300 h-[0.5px] my-1" />
      </div>
      <div>
        <div className="flex items-center px-3 gap-2 py-1">
          <input
            onChange={() => handleRating("1")}
            checked={selectedRatings?.includes("1")}
            type="checkbox"
            className="accent-peace-400 "
          />
          <div className="flex text-crusta-400">
            <FaStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </div>
        </div>
        <hr className="bg-gray-300 h-[0.5px] my-1" />
      </div>
    </div>
  );
};

export default RatingFilter;
