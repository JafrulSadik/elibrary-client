import { Suspense } from "react";
import Slider from "../../components/slider";
import AllBooks from "./_components/all-books";
import CategorySect from "./_components/category-sect";
import LatestBooks from "./_components/latest-books";
import PopularAuthors from "./_components/popular-authors";
import PopularBooks from "./_components/popular-books";

export default async function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <Slider />
      {/* All books sect */}
      <div className="flex flex-col items-center bg-crusta-950 pt-8 pb-14 w-full">
        <div className="h-2 w-8 mb-8 rounded bg-gradient-to-t from-crusta-700 to-crusta-400" />

        {/* Vertical line design */}
        <div className="max-w-7xl w-[95%] flex flex-col items-center justify-center gap-10">
          {/* All Books */}
          <AllBooks />

          {/* latest books */}
          <LatestBooks />

          {/* Popular books */}
          <PopularBooks />
        </div>
      </div>

      {/* Books category */}
      <CategorySect />

      {/* Top writers */}
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-64 bg-crusta-950">
            <p className="text-white">Loading...</p>
          </div>
        }
      >
        <PopularAuthors />
      </Suspense>
    </main>
  );
}
