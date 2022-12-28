import React, { useRef, useContext } from 'react';
import AuthContext from 'store/auth-context';
import { useNavigate } from 'react-router-dom';
import classes from './ProfileForm.module.scss';

const ProfileForm = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const newPasswordInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newPasswordInputRef.current) {
      return;
    }

    const enteredNewPassword = newPasswordInputRef.current.value;

    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDjyHk7jQCggs0Qha0SjERkoTYoV7kiLGQ',
      {
        method: 'POST',
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          'Content-type': 'application/json',
        },
      },
    ).then((res) => {
      // assumption: Always succeeds!

      navigate('/');
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength={7}
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
