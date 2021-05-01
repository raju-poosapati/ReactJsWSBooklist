import { ADD_BOOK } from "./Actiontypes";

export const addBookAction = (bookname) => {
  return {
    type: ADD_BOOK,
    payload: bookname,
    id: Math.random(),
  };
};
