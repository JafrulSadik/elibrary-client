"use client";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import ReactPaginate from "react-paginate";
import "./style.css";

type Props = {
  handlePageNumber: Function;
  pageCount: number;
  pageRangeDisplayed: number;
};

const Pagination = (props: Props) => {
  const { handlePageNumber, pageCount, pageRangeDisplayed } = props;

  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={2}
      onPageChange={(event) => handlePageNumber(event)}
      containerClassName="pagination"
      pageClassName="page-number"
      activeClassName="active"
      previousLabel={<GrFormPrevious />}
      previousClassName="pervious"
      nextClassName="next"
      nextLabel={<GrFormNext />}
    />
  );
};

export default Pagination;
