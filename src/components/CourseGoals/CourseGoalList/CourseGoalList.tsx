import { CourseGoal } from 'interfaces';
import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.scss';


interface CourseGoalListProps {
  items: CourseGoal[];
  onDeleteItem: (arg0: string) => void;
}

const CourseGoalList = (props: CourseGoalListProps) => {
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
