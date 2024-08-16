"use client";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import Swal from "sweetalert2";
import Pagination from "../../../../../components/pagination";
import { ApiSuccessfullResponse } from "../../../../../types/ApiResponse";
import {
  Book,
  GetUserBooksProps,
  PaginationType,
} from "../../../../../types/Book";
import { deleteBook, getUserBooks } from "../../../../action";

type ColumnType = Pick<
  Book,
  "_id" | "title" | "cover" | "downloads" | "genre" | "status"
>;

const columnHelper = createColumnHelper<ColumnType>();

const DataTable = () => {
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
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

  const handleDelete = async ({ bookId }: { bookId: string }) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#441006",
      cancelButtonColor: "#a84a1f",
      confirmButtonText: "Yes, delete it!",
    });

    setDeleteLoading(true);

    if (result.isConfirmed) {
      await deleteBook({ bookId });
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        confirmButtonColor: "#441006",
        icon: "success",
      });
    }
    setDeleteLoading(false);
    await fetchData({ page });
  };

  useEffect(() => {
    fetchData({ page });
  }, [page]);

  const columns = [
    columnHelper.accessor("cover", {
      header: () => "Cover Image",
      cell: (info) => (
        <div className="flex justify-center">
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
      cell: (info) => (
        <div className="hidden lg:block">
          <p className="truncate">{info.getValue()}</p>
        </div>
      ),
    }),
    columnHelper.accessor("_id", {
      header: () => "Action",
      cell: (info) => {
        return (
          <div className="flex justify-center gap-2 px-2">
            <button className="px-3 py-1 bg-slate-100 border border-gray-200 shadow-sm rounded-md hover:border-gray-300">
              Update
            </button>
            <button
              className="flex items-center gap-1 px-3 py-1 bg-crusta-950 hover:bg-crusta-800 text-white rounded-md "
              onClick={() => handleDelete({ bookId: info.getValue() })}
              disabled={deleteLoading}
            >
              {deleteLoading && (
                <span className="animate-spin">
                  <ImSpinner2 size={16} />
                </span>
              )}
              <span>Delete</span>
            </button>
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
        <div className="min-w-[500px] border border-gray-300 rounded-md">
          <table className="w-full">
            <thead className="border-b-[1px] border-gray-300">
              {table.getHeaderGroups().map((headerGroup, index) => (
                <tr className="h-12" key={index}>
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
                <tr className="border-b-[1px] border-gray-300 h-14" key={index}>
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
