"use client";

import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

type Props = {
  handleloadSuccess: Function;
  pageNumber: number;
  width: number;
  selectedColor: string;
};

const DisplayBook = (props: Props) => {
  const { pageNumber, handleloadSuccess, width, selectedColor } = props;

  const samplePDF =
    "https://res.cloudinary.com/dykgzydmw/raw/upload/v1723928999/elibrary/book-files/mf1llgxr8jct1mucwb8i.pdf";

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    handleloadSuccess({ numPages });
  }

  console.log(selectedColor);

  return (
    <>
      <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
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
