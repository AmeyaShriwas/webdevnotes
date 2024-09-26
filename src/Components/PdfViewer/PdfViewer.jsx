import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = ({ pdfUrl }) => {
  return (
    <div style={{ height: '600px', overflowY: 'auto' }}>
      <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PdfViewer;
