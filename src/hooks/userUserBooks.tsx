"use client";
import { useEffect, useState } from "react";
import { getUserBooks } from "../app/action/book-action";
import { Book } from "../types/Book";

interface UserUserBooksProps {
  page: number;
  searchBy?: "title" | "bookId" | "genre";
  search?: string;
}

interface UseUserBooksReturn {
  data: Book[];
  loading: boolean;
  totalRecords: number;
  error: string | null;
}

const useUserBooks = ({
  page,
  searchBy,
  search,
}: UserUserBooksProps): UseUserBooksReturn => {
  const [data, setData] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getUserBooks({ page, searchBy, search });
        setData(response.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, search]);

  return { data, loading, totalRecords, error };
};

export default useUserBooks;
