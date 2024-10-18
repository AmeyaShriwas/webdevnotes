import React from 'react';
import './PurchaseModel.css';

const PurchaseInfoModal = ({showModal, setShowModal}) => {

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Purchased PDFs</h2>
              <button className="close-btn" onClick={closeModal}>&times;</button>
            </div>
            <div className="modal-body">
              <p>
                To see your purchased PDFs, go to the Profile section from the header and then click on <strong>Account</strong>. There, you can view your purchased PDFs.
              </p>
            </div>
            <div className="modal-footer">
              <button className="ok-btn" onClick={closeModal}>OK</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PurchaseInfoModal;
