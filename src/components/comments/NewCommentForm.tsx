import React from 'react';
import { useRef, useEffect } from 'react';
import { addComment } from 'lib/api';
import useHttp from '../../hooks/use-http';

import classes from './NewCommentForm.module.scss';
import LoadingSpinner from 'components/UI/LoadingSpinner';

interface NewCommentFormProps {
  quoteId: string;
  onAddedComment: () => void;
}

const NewCommentForm = (props: NewCommentFormProps) => {
  const { sendRequest, status, error } = useHttp(addComment);
  const commentTextRef = useRef<HTMLTextAreaElement>(null);

  const { onAddedComment } = props;

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // optional: Could validate here

    // send comment to server
    const enteredText = commentTextRef.current?.value || '';

    sendRequest({ commentData: { text: enteredText }, quoteId: props.quoteId });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div>
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows={5} ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
