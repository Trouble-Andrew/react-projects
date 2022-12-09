import React, {
  useState,
  useReducer,
  useEffect,
  useContext,
  useRef,
} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.scss';
import Button from '../UI/Button/Button';
import AuthContext from 'context/auth-context';
import Input from 'components/Input/Input';

interface EmailReducerState {
  value: string;
  isValid: null | boolean;
}

type EmailReducerAction = {
  type: string;
  payload?: string;
};
interface PasswordReducerState {
  value: string;
  isValid: null | boolean;
}

type PasswordReducerAction = {
  type: string;
  payload?: string;
};

function emailReducer(
  state: EmailReducerState,
  action: EmailReducerAction,
): EmailReducerState {
  if (action.type === 'USER_INPUT') {
    if (action.payload) {
      return { value: action.payload, isValid: action.payload?.includes('@') };
    }
  }

  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }

  return { value: '', isValid: false };
}

function passwordReducer(
  state: PasswordReducerState,
  action: PasswordReducerAction,
): PasswordReducerState {
  if (action.type === 'USER_INPUT') {
    if (action.payload) {
      return {
        value: action.payload,
        isValid: action.payload?.trim().length > 6,
      };
    }
  }

  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }

  return { value: '', isValid: false };
}

const Login = () => {
  const authCtx = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const timerID = setTimeout(() => {
      if (emailIsValid && passwordIsValid) {
        setFormIsValid(emailIsValid && passwordIsValid);
      }
    }, 500);

    return () => {
      clearTimeout(timerID);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    dispatchEmail({ type: 'USER_INPUT', payload: event.currentTarget.value });

    setFormIsValid(
      event.currentTarget.value.includes('@') &&
        passwordState.value.trim().length > 6,
    );
  };

  const passwordChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    dispatchPassword({
      type: 'USER_INPUT',
      payload: event.currentTarget.value,
    });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      if (!emailInputRef.current) {
        throw Error('inputRef is not assigned');
      }
      emailInputRef.current.focus();
    } else {
      if (!passwordInputRef.current) {
        throw Error('inputRef is not assigned');
      }
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          label={'E-Mail'}
          inputId={'email'}
          inputType={'email'}
          inputState={emailState}
          changeHandler={emailChangeHandler}
          blurHandler={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          label={'Password'}
          inputId={'password'}
          inputType={'password'}
          inputState={passwordState}
          changeHandler={passwordChangeHandler}
          blurHandler={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
