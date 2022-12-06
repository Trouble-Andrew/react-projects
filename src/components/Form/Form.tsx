import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { FormProps } from './FormProps';

function Form({ onSubmitForm }: FormProps) {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!!userName && Number(age) > 0) {
      onSubmitForm({ username: userName, age: Number(age), id: nanoid() });
    } else if (userName === '' || age === '') {
      console.log('must be non empty');
    } else if ( Number(age) <= 0 ) {
      console.log('must be > 0');
    }
  }

  function nameChangeHandler(e: React.FormEvent<HTMLInputElement>) {
    setUserName(e.currentTarget.value);
  }

  function ageChangeHandler(e: React.FormEvent<HTMLInputElement>) {
    setAge(e.currentTarget.value);
  }

  return (
    <form action="#" onSubmit={submitHandler}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={userName}
          onChange={nameChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="years">Age (Years)</label>
        <input
          type="number"
          id="years"
          name="years"
          value={age}
          onChange={ageChangeHandler}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
