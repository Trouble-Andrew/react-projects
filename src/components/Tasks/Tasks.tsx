import { Task } from 'interfaces';
import React from 'react';
import Section from '../UI/Section';
import TaskItem from './TaskItem';
import classes from './Tasks.module.scss';

interface TasksProps {
  items: Task[];
  error: string | null;
  loading: boolean;
  onFetch: (...args: any) => void;
}

const Tasks = ({ items, error, loading, onFetch }: TasksProps) => {
  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (items.length > 0) {
    taskList = (
      <ul>
        {items.map((task: Task) => (
          <TaskItem key={task.id}>{task.text}</TaskItem>
        ))}
      </ul>
    );
  }

  let content = taskList;

  if (error) {
    content = <button onClick={onFetch}>Try again</button>;
  }

  if (loading) {
    content = <p>'Loading tasks...'</p>;
  }

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
};

export default Tasks;
