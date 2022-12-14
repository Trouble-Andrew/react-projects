import React, { useState } from 'react';
import { Task } from 'interfaces';
import { BASE_URL } from '../../constants';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

interface NewTaskProps {
  onAddTask: (task: Task) => void;
}

const NewTask = ({ onAddTask }: NewTaskProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const enterTaskHandler = async (taskText: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${BASE_URL}/tasks.json`, {
        method: 'POST',
        body: JSON.stringify({ text: taskText }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      onAddTask(createdTask);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'Something went wrong!');
        return err.message;
      }
    }
    setIsLoading(false);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
