import Slider from "../../components/slider";
import WriterCard from "../../components/writer-card";
import WriterCard2 from "../../components/writer-card/extra/WriterCard";
import WriterCard1 from "../../components/writer-card/extra/WriterCard1";
import AllBooks from "./_components/all-books";
import CategorySect from "./_components/category-sect";
import LatestBooks from "./_components/latest-books";
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
      <div className="flex flex-col items-center bg-crusta-950 pt-8 pb-14 w-full">
        {/* Vertical line design */}
        <div className="h-2 w-8 mb-8 rounded bg-gradient-to-t from-crusta-700 to-crusta-400" />
        <h1 className="text-xl md:text-3xl text-white font-extrabold tracking-tighter">
          Top Writers
        </h1>

        <div className="flex flex-wrap justify-center gap-10 lg:gap-14 max-w-7xl w-[90%] my-9 px-10 md:px-20">
          <WriterCard />
          <WriterCard1 />
          <WriterCard2 />
        </div>
      </div>
    </main>
  );
}
