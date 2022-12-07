import React from 'react';
import Button from 'components/Button/Button';
import Card from 'components/Card/Card';
import styles from './ErrorModal.module.scss';
import { ErrorModalProps } from './ErrorModalProps';

function ErrorModal({ title, message, onConfirm }: ErrorModalProps) {
  return (
    <div>
      <div className={styles.backdrop} onClick={onConfirm} />
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
    </div>
  );
}

export default ErrorModal;
