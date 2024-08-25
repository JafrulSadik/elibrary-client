import { useEffect, useState } from "react";
import { User } from "../types/User";

interface UseUserDataProps {
  page: number;
}

interface UseUserDataReturn {
  data: User[];
  loading: boolean;
  totalRecords: number;
  error: string | null;
}

const useUserData = ({ page }: UseUserDataProps): UseUserDataReturn => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `http://localhost:5000/users?page=${page}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        console.log("Fetch rendered.");

        const result = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  return { data, loading, totalRecords, error };
};

export default useUserData;
