"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import usePopularAuthors from "../../../../../hooks/useAuthorData";

const TopWriters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { authors, loading } = usePopularAuthors();

  const authorsId = searchParams.get("authors")?.split(",");
  const handleAuthorSelect = (authorId: string) => {
    const params = new URLSearchParams(searchParams);

    const data = params.get("authors");
    let newAuthors = "";

    if (data) {
      const splited = data.split(",");
      if (splited.includes(authorId)) {
        const filteredAuthor = splited.filter((item) => item !== authorId);
        newAuthors = filteredAuthor.join(",");
      } else {
        const selectedAuthor = [...splited, authorId];
        newAuthors = selectedAuthor.join(",");
      }
    } else {
      newAuthors = authorId;
    }

    if (newAuthors) {
      params.set("authors", newAuthors);
    } else {
      params.delete("authors");
    }

    const url = `${pathname}?${params.toString()}`;

    router.push(url);
    router.refresh();
  };

  return (
    <div className="text-sm h-[180px]">
      {authors &&
        authors.map((author) => {
          const selected = authorsId?.includes(author._id);
          return (
            <div key={author._id}>
              <div className="flex items-center px-3 gap-2 py-1">
                <input
                  checked={selected}
                  onChange={() => handleAuthorSelect(author._id)}
                  type="checkbox"
                  className="accent-peace-400 "
                />
                <Link href="">{author.name}</Link>
              </div>
              <hr className="bg-gray-300 h-[0.5px] my-1" />
            </div>
          );
        })}
    </div>
  );
};

export default TopWriters;
