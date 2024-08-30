"use client";

import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import BookLoader from "../book-loader";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

type Props = {
  handleloadSuccess: Function;
  pageNumber: number;
  width: number;
  selectedColor: string;
  book: string;
};

const DisplayBook = (props: Props) => {
  const { book } = props;
  const { pageNumber, handleloadSuccess, width, selectedColor } = props;

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    handleloadSuccess({ numPages });
  }

  return (
    <>
      <Document
        file={book}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<BookLoader width={width} />}
      >
        <Page
          pageNumber={pageNumber}
          width={width}
          canvasBackground={selectedColor || ""}
        />
      </Document>
    </>
  );
};

export default DisplayBook;
