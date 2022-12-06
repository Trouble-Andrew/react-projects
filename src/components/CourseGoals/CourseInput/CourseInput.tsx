import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.scss';

interface CourseInputProps {
  onAddGoal: (arg0: string) => void;
}

const CourseInput = (props: CourseInputProps) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.currentTarget.value);
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles['form-control']} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
