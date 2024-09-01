"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllGenre } from "../../../../action/genre-action";
import "./scrollbar-style.css";

type Genre = {
  _id: string;
  title: string;
  code: number;
};

const PopularCategory = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const genreCodes = searchParams.get("genres")?.split(",");
  const [genres, setGenres] = useState<Genre[]>([]);

  const handleGenre = (genre: Genre) => {
    const params = new URLSearchParams(searchParams);

    const data = params.get("genres");
    let newGenres = "";

    if (data) {
      const splited = data.split(",");
      if (splited.includes(genre.code.toString())) {
        const filteredGenre = splited.filter(
          (item) => item !== genre.code.toString()
        );
        newGenres = filteredGenre.join(",");
      } else {
        const allGenre = [...splited, genre.code];
        newGenres = allGenre.join(",");
      }
    } else {
      newGenres = genre.code.toString();
    }

    if (newGenres) {
      params.set("genres", newGenres);
    } else {
      params.delete("genres");
    }

    const url = `${pathname}?${params.toString()}`;

    router.push(url);
    router.refresh();
  };

  const fetchAllGenres = async () => {
    const queryString = searchParams.get("genres");
    const response = await getAllGenre({ queryString: queryString || "" });
    const { data } = response;
    setGenres(data);
  };

  useEffect(() => {
    fetchAllGenres();
  }, [searchParams]);

  return (
    <div className="text-sm h-[150px]  overflow-y-auto">
      {genres?.map((genre, index) => {
        const selected = genreCodes?.includes(genre.code.toString());

        return (
          <div key={index}>
            <div
              onChange={() => handleGenre(genre)}
              className="flex items-center px-3 gap-2 py-1"
            >
              <input
                type="checkbox"
                defaultChecked={selected}
                className="accent-peace-400 "
              />
              <span>{genre.title}</span>
            </div>
            <hr className="bg-gray-300 h-[0.5px] my-1" />
          </div>
        );
      })}
    </div>
  );
};

export default PopularCategory;
