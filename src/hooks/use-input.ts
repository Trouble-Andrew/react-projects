import { useReducer } from 'react';

interface InputState {
  value: string;
  isTouched: boolean;
}

type ACTIONTYPE =
  | { type: 'INPUT'; value: string }
  | { type: 'BLUR' }
  | { type: 'RESET' };

const initialInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state: InputState, action: ACTIONTYPE) => {
  if (action.type === 'INPUT') {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }

  if (action.type === 'BLUR') {
    return {
      value: state.value,
      isTouched: true,
    };
  }

  if (action.type === 'RESET') {
    return {
      value: '',
      isTouched: false,
    };
  }

  return initialInputState;
};

const useInput = (validateValue: (...args: any) => boolean) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState,
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch({ type: 'INPUT', value: e.currentTarget.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
