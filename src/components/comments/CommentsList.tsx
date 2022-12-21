import React from 'react';
import CommentItem from './CommentItem';
import { Comment } from '../../interfaces';
import classes from './CommentsList.module.css';

interface CommentsListProps {
  comments: Comment[];
}

const CommentsList = (props: CommentsListProps) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentsList;
