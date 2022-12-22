// 👇️ ts-nocheck disables type checking for entire file
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { RequestData } from 'interfaces';
import { useReducer, useCallback } from 'react';

type Action =
  | { type: 'SEND' }
  | { type: 'SUCCESS'; responseData: unknown }
  | { type: 'ERROR', errorMessage?: string };

interface State {
  data: null | RequestData;
  error: null | Error;
  status: string;
}

function httpReducer(state: State, action: Action) {
  if (action.type === 'SEND') {
    return {
      data: null,
      error: null,
      status: 'pending',
    };
  }

  if (action.type === 'SUCCESS') {
    return {
      data: action.responseData,
      error: null,
      status: 'completed',
    };
  }

  if (action.type === 'ERROR') {
    return {
      data: null,
      error: action.errorMessage,
      status: 'completed',
    };
  }

  return state;
}

function useHttp(requestFunction: Function, startWithPending = false) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? 'pending' : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async function (requestData: unknown) {
      dispatch({ type: 'SEND' });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: 'SUCCESS', responseData });
      } catch (error: unknown) {
        if (error instanceof Error) {
          dispatch({
            type: 'ERROR',
            errorMessage: error.message || 'Something went wrong!',
          });
        }
      }
    },
    [requestFunction],
  );

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;
