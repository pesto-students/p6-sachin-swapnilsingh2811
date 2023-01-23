import React from "react";

const DisplayToDoList = (props) => {
//   console.log(props.listItems[0]);
  return (
    <div>
      <label><h2>ToDo Lists</h2></label>
      {props.listItems.map((lists) => (
        <div>
          <h3><input type="checkbox"></input>{lists}</h3>
        </div>
      ))}
    </div>
  );
};

export default DisplayToDoList;
