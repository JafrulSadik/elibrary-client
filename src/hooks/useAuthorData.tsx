"use client";
import { useEffect, useState } from "react";
import { popularAuthor } from "../app/action/user-action";
import { PopularAuthorType } from "../types/User";

const usePopularAuthors = () => {
  const [authors, setAuthors] = useState<PopularAuthorType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPopularAuthors();
  }, []);

  const fetchPopularAuthors = async () => {
    setLoading(true); // Start loading

    try {
      const response = await popularAuthor({ limit: 5 });
      setAuthors(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  return { authors, loading };
};

export default usePopularAuthors;
