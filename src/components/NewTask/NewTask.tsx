import React from 'react';
import useHttp from 'hooks/use-http';
import { Task } from 'interfaces';
import { BASE_URL } from '../../constants';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

interface NewTaskProps {
  onAddTask: (task: Task) => void;
}

const NewTask = ({ onAddTask }: NewTaskProps) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createTask = (taskText: string, taskData: Task) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id

    if (generatedId) {
      const createdTask = { id: generatedId, text: taskText };
      onAddTask(createdTask);
    }
  };

  const enterTaskHandler = async (taskText: string) => {
    sendTaskRequest(
      {
        url: `${BASE_URL}/tasks.json`,
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: { text: taskText },
      },
      createTask.bind(null, taskText),
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
