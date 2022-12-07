import React, { useState, useRef } from 'react';
import Card from 'components/Card/Card';
import Button from 'components/Button/Button';
import styles from './AddUser.module.scss';
import { AddUserProps } from './AddUserProps';
import ErrorModal from 'components/ErrorModal/ErrorModal';
import { ErrorMessage } from '../../interfaces';

function AddUser({ onAddUser }: AddUserProps) {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<ErrorMessage | null>(null);

  function addUserHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const enteredName = nameInputRef.current?.value;
    const enteredAge = ageInputRef.current?.value;

    if (enteredName?.trim().length === 0 || enteredAge?.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      });

      return;
    }

    if (Number(enteredAge) < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (>0).',
      });

      return;
    }

    if (enteredName && enteredAge) {
      onAddUser(enteredName, Number(enteredAge));
      clearForm();
    }
  }

  function clearForm() {
    if (nameInputRef.current && ageInputRef.current) {
      nameInputRef.current.value = '';
      ageInputRef.current.value = '';
    }
  }

  function errorHandler() {
    setError(null);
  }

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={styles.input}>
        <form action="#" onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" name="age" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
