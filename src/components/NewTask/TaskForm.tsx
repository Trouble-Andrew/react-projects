import React, { useRef } from 'react';

import classes from './TaskForm.module.scss';

interface TaskFormProps {
  loading: boolean;
  onEnterTask: (value: string) => void;
}

const TaskForm = ({loading, onEnterTask}: TaskFormProps) => {
  const taskInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!taskInputRef.current) {
      return;
    }

    const enteredValue = taskInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      onEnterTask(enteredValue);
    }

    // return null;
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type="text" ref={taskInputRef} />
      <button>{loading ? 'Sending...' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
