import React from "react";
import Body from "./Body";
import { pdfjs } from "react-pdf";
import PdfViewer from "./pdf_viewer";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const TermsAndConditions = () => {
  return (
    <div>
      TermsAndConditions <Body />
      <PdfViewer />
    </div>
  );
};

export default TermsAndConditions;
