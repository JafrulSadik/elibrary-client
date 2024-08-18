"use client";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Image from "next/image";
import { useEffect, useState } from "react";
import Pagination from "../../../../../components/pagination";
import { ApiSuccessfullResponse } from "../../../../../types/ApiResponse";
import {
  Book,
  GetUserBooksProps,
  PaginationType,
} from "../../../../../types/Book";
import { getUserBooks } from "../../../../action";
import DeleteBtn from "../delete-btn";

type ColumnType = Pick<
  Book,
  "_id" | "title" | "cover" | "downloads" | "genre" | "status"
>;

const columnHelper = createColumnHelper<ColumnType>();

const DataTable = () => {
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(0);

  const fetchData = async (props: GetUserBooksProps) => {
    const { page } = props;
    setLoading(true);
    const response = (await getUserBooks({ page })) as ApiSuccessfullResponse<
      Book,
      PaginationType
    >;

    const { data, pagination } = response;
    setData(data);
    setTotalPage(pagination.totalPage);
    setLoading(false);
  };

  const handlePageNumber = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  useEffect(() => {
    fetchData({ page });
  }, [page]);

  const columns = [
    columnHelper.accessor("cover", {
      header: () => "Cover Image",
      cell: (info) => (
        <div className="flex justify-center p-1">
          <Image
            src={info.getValue()}
            alt="Book Image"
            height="0"
            width={30}
            style={{ width: "auto", height: "auto" }}
            className="rounded-sm"
          />
        </div>
      ),
    }),
    columnHelper.accessor("_id", {
      header: () => "Book ID",
      cell: (info) => (
        <div className="w-14">
          <p className="truncate">{info.getValue()}</p>
        </div>
      ),
    }),
    columnHelper.accessor("title", {
      header: () => "Title",
      cell: (info) => (
        <div className="flex justify-center">
          <div className="w-40">
            <p className="truncate">{info.getValue()}</p>
          </div>
        </div>
      ),
    }),
    columnHelper.accessor("genre", {
      header: () => (
        <div className="hidden lg:block">
          <p>Genre</p>
        </div>
      ),
      cell: (info) => {
        return (
          <div className="hidden lg:block">
            <p className="truncate">{info.getValue().title}</p>
          </div>
        );
      },
    }),
    columnHelper.accessor("_id", {
      header: () => "Action",
      cell: (info) => {
        return (
          <div className="flex justify-center gap-2 px-2">
            <button className="px-3 py-1 bg-slate-100 border border-gray-200 shadow-sm rounded-md hover:border-gray-300">
              Update
            </button>
            <DeleteBtn bookId={info.getValue()} fetchData={fetchData} />
          </div>
        );
      },
    }),
  ];

  const table = useReactTable({
    columns,
    data: data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full  my-1">
      <div className="w-full overflow-x-scroll scroll">
        <div className="min-w-[500px] border border-gray-200 rounded-md">
          <table className="w-full">
            <thead className="border-b-[0.5px] border-gray-200 ">
              {table.getHeaderGroups().map((headerGroup, index) => (
                <tr className="h-14" key={index}>
                  {headerGroup.headers.map((header, index) => (
                    <th
                      className=" text-center font-semibold text-sm p-2"
                      key={index}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((raw, index) => (
                <tr
                  className="border-b-[0.5px] border-gray-200 h-14"
                  key={index}
                >
                  {raw.getVisibleCells().map((cell, index) => (
                    <td className="text-sm" key={index}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {!data.length && (
            <div className="min-w-[500px] flex justify-center items-center h-[30vh]">
              <p className="text-sm">No books found!</p>
            </div>
          )}
        </div>
      </div>
      {/* Pagination */}
      <div className="flex justify-end py-3 w-full">
        <Pagination
          handlePageNumber={handlePageNumber}
          pageCount={totalPage}
          pageRangeDisplayed={2}
        />
      </div>
    </div>
  );
};

export default DataTable;
