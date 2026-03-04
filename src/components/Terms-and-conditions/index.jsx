import React from "react";
import Body from "./Body";
import { pdfjs } from "react-pdf";
import PdfViewer from "./pdf_viewer";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const TermsAndConditions = () => {
  return (
    <div
      style={{
        padding: "50px 0",
        marginTop: "50px",
        backgroundColor: "#F5F5F5",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* TermsAndConditions <Body /> */}
      <PdfViewer />
    </div>
  );
};

export default TermsAndConditions;
