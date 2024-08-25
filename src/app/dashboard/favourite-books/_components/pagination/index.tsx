"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Pagination from "../../../../../components/pagination";

type Props = {
  pageCount: number;
};

const PaginationSect = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { pageCount } = props;

  const handlePageNumber = (props: { selected: number }) => {
    const page = props.selected + 1;
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Pagination
      handlePageNumber={handlePageNumber}
      pageCount={pageCount}
      pageRangeDisplayed={3}
    />
  );
};

export default PaginationSect;
