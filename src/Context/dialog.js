/**
 * @fileoverview dialogContext
 * @name dialog.js
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import { createContext, useReducer } from 'react';

export const DialogContext = createContext({});

export const dialogReducer = (state, action) => {

  switch (action.type) {
    case 'OPEN_DIALOG':
      return Object.assign(state, { isOpen: true, message: action.message });
    case 'CLOSE_DIALOG':
      return Object.assign(state, { isOpen: false });
    default:
     return state;
  }
};

export const useDialog = () => {
  const [state, dispatch] = useReducer(dialogReducer, {
    isOpen: false,
    message: '',
  });

  const open = (message) => {
    dispatch({ type: 'OPEN_DIALOG', message });
  };

  const close = () => {
    dispatch({ type: 'CLOSE_DIALOG' });
  }

  return [state, { open, close }];
};
