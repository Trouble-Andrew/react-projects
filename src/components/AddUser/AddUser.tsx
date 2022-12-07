import React, { useState } from 'react';
import Card from 'components/Card/Card';
import Button from 'components/Button/Button';
import styles from './AddUser.module.scss';
import { AddUserProps } from './AddUserProps';
import ErrorModal from 'components/ErrorModal/ErrorModal';
import { ErrorMessage } from '../../interfaces';

function AddUser({ onAddUser }: AddUserProps) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState<ErrorMessage | null>(null);

  function addUserHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
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

    onAddUser(enteredUsername, Number(enteredAge));
    clearForm();
  }

  function usernameChangeHandler(e: React.FormEvent<HTMLInputElement>) {
    setEnteredUsername(e.currentTarget.value);
  }

  function ageChangeHandler(e: React.FormEvent<HTMLInputElement>) {
    setEnteredAge(e.currentTarget.value);
  }

  function clearForm() {
    setEnteredUsername('');
    setEnteredAge('');
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
          <input
            type="text"
            id="username"
            name="username"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            name="age"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
