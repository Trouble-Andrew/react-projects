import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';
import { ModalProps, ModalOverlayProps, BackdropProps } from './ModalProps';

const portalElement = document.getElementById('overlays');

function Backdrop({onClose}: BackdropProps) {
  return <div className={styles.backdrop} onClick={onClose}></div>;
}

function ModalOverlay({ children }: ModalOverlayProps) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

function Modal({ children, onClose }: ModalProps): JSX.Element | null {
  if (!portalElement) {
    return null;
  }

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement,
      )}
    </>
  );
}

export default Modal;
