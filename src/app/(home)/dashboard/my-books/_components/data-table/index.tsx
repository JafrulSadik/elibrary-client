"use client";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Image from "next/image";
import { useState } from "react";
import Pagination from "../../../../../../components/pagination";
import useUserBooks from "../../../../../../hooks/userUserBooks";
import { Book } from "../../../../../../types/Book";
import DeleteBtn from "../delete-btn";

type ColumnType = Pick<
  Book,
  "_id" | "title" | "cover" | "downloads" | "genre" | "status"
>;

const columnHelper = createColumnHelper<ColumnType>();

type Props = {
  search: string;
  searchBy: "title" | "bookId" | "genre";
};

const DataTable = (props: Props) => {
  const { search, searchBy } = props;
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState(0);
  const { data, loading, error } = useUserBooks({
    page,
    search,
    searchBy,
  });

  const handlePageNumber = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

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
            <DeleteBtn bookId={info.getValue()} />
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
          {loading ? (
            <div className="min-w-[500px] flex justify-center items-center h-[30vh]">
              <p className="text-sm">Loading...</p>
            </div>
          ) : (
            !data.length && (
              <div className="min-w-[500px] flex justify-center items-center h-[30vh]">
                <p className="text-sm">No books found!</p>
              </div>
            )
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
