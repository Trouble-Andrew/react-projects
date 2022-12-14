import React from 'react';
import classes from './TaskItem.module.scss';

interface TaskItemProps extends React.ComponentPropsWithoutRef<'section'> {}

const TaskItem = (props: TaskItemProps) => {
  return <li className={classes.task}>{props.children}</li>;
};

export default TaskItem;
