import React from 'react';
import ReactDOM from 'react-dom';
import { ModalContainer } from 'shared/modal-container/modal-container.component';

export const Modal = ({ closeModal, children }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalContainer onClose={closeModal}>{children}</ModalContainer>,
        document.getElementById('modal-root')
      )}
    </>
  );
};
