import { Document } from "react-pdf";
import pdf from "../../assets/CGU_Ejara.pdf";
function PdfViewer() {
  return (
    <div>
      <Document file={pdf}> </Document>
    </div>
  );
}
export default PdfViewer;
