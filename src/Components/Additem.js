import React from "react";
import { useDispatch } from "react-redux";
import { addBookAction } from "../Redux/Actions/Actions";
const Additem = () => {
  const dispatch = useDispatch();

  const handlesubmit = (e) => {
    e.preventDefault();
    let input = e.target.userInput.value;
    dispatch(addBookAction(input));
    e.target.userInput.value = "";
  };

  return (
    <div>
      <form onSubmit={(e) => handlesubmit(e)}>
        <input name="userInput"></input>
        <button>Add</button>
      </form>
    </div>
  );
};

export default Additem;
