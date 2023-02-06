import React, { useState } from "react";
import './Form.css'

const Form = (props) => {
  const [lists, setListsChange] = useState('');

  const listChangeHandler = (event) => {
    setListsChange(event.target.value);
};
console.log(lists);

  const submitHandler = (e) => {
    e.preventDefault();
    const todoList = [];
    todoList.push(lists);
    console.log(todoList);

    props.onSubmiting(todoList);
    setListsChange('');
  };
  return (
    <form className="labels" onSubmit={submitHandler}>
      <div>
        <label><h1>Enter ToDo List</h1></label>
      </div>
        <input type="text" value={lists} onChange={listChangeHandler}></input>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
