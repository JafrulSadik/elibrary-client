"use client";
import { useEffect, useState } from "react";
import { getReviews } from "../app/action/book-action";
import { Reviews } from "../types/Book";

type Props = {
  bookId: string;
  totalReviews: number;
};

const useBookReviews = (props: Props) => {
  const { bookId, totalReviews } = props;

  const [reviews, setReviews] = useState<Reviews[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchReviews(currentPage);
  }, []);

  const fetchReviews = async (page: number) => {
    setLoading(true); // Start loading

    try {
      const response = await getReviews({
        bookId,
        limit: 1 * page,
      });

      const { data } = response;

      if (response.data.length > 0) {
        setReviews(() => [...data]);
        setCurrentPage((prev) => prev + 1);
      }

      if (data.length >= totalReviews) {
        setHasMore(false); // No more reviews to fetch
      } else {
        setCurrentPage((prev) => prev + 1);
        setHasMore(true);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false); // Start loading
    }
  };

  const loadMoreReviews = () => {
    if (!loading) {
      fetchReviews(currentPage + 1);
    }
  };

  return { reviews, hasMore, loadMoreReviews, loading };
};

export default useBookReviews;
