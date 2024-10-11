import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import Modal from "react-modal";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { pdfjs } from 'react-pdf';

// Set workerSrc to point to the PDF.js worker file
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

Modal.setAppElement("#root"); // For accessibility

const PdfModalViewer = ({ pdfUrl }) => {
  console.log('pdf', pdfUrl)
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onDocumentLoadError = (error) => {
    console.error("Error loading PDF:", error);
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>View PDF</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="PDF Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            width: "80%",
            height: "90%",
            margin: "auto",
          },
        }}
      >
        <button onClick={closeModal}>Close</button>
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </Modal>
    </div>
  );
};

export default PdfModalViewer;
