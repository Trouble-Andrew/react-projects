import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.scss';

interface CourseInputProps {
  onAddGoal: (arg0: string) => void;
}

const CourseInput = (props: CourseInputProps) => {
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEnteredValue(event.currentTarget.value);
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
