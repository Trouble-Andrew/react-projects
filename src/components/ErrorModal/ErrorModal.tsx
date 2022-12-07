import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'components/Button/Button';
import Card from 'components/Card/Card';
import styles from './ErrorModal.module.scss';
import { ErrorModalProps, BackdropProps } from './ErrorModalProps';

function Backdrop({ onConfirm }: BackdropProps) {
  return <div className={styles.backdrop} onClick={onConfirm} />;
}

function ModalOverlay({ title, message, onConfirm }: ErrorModalProps) {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={onConfirm}>Ok</Button>
      </footer>
    </Card>
  );
}

function ErrorModal({ title, message, onConfirm }: ErrorModalProps) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById('backdrop-root') as HTMLElement,
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById('overlay-root') as HTMLElement,
      )}
    </>
  );
}

export default ErrorModal;
