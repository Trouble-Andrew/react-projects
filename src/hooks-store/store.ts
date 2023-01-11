import { useState, useEffect } from 'react';

let globalState = {};

let listeners = [];

let actions = {};

export const useStore = (shouldLister = true) => {
  const setState = useState(globalState)[1];

  const dispatch = (actionId, payload) => {
    const newState = actions[actionId](globalState, payload);

    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    if (shouldLister) {
      listeners.push(setState);
    }

    return () => {
      if (shouldLister) {
        listeners = listeners.filter((li) => li !== setState);
      }
    };
  }, [setState, shouldLister]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }

  actions = { ...actions, ...userActions };
};
