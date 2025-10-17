import { Document, Page } from "react-pdf";
import pdf from "../../assets/CGU_Ejara.pdf";
import { useState } from "react";
function PdfViewer() {
  const [pageNumber, setPageNUmber] = useState(1);
  function onDocumentLoaded(data) {
    console.log("Document loaded", data);
  }

  return (
    <div>
      <Document file={pdf} onLoadSuccess={onDocumentLoaded}>
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
}
export default PdfViewer;
