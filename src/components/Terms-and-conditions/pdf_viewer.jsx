import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import pdf from "../../assets/CGU_Ejara.pdf";

// IMPORTANT: Set worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PdfViewer() {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    console.log("Total pages:", numPages);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        {/* <Page pageNumber={pageNumber} /> */}
        <Page pageNumber={pageNumber} width={window.innerWidth * 0.8} />
      </Document>

      {numPages && (
        <div
          style={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber(pageNumber - 1)}
          >
            Previous
          </button>

          <span style={{ margin: "0 15px" }}>
            Page {pageNumber} of {numPages}
          </span>

          <button
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber(pageNumber + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default PdfViewer;
