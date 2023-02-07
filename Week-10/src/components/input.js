
import { useState } from "react";
import classes from './input.module.css';
const InputHandler = (props) => {
  const [input, setInput] = useState("");
  const handlingInput = () => {
    console.log("got input");
    props.inputValue(input);
    setInput("");
  };

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={classes.inputContainer}>
      <h1 >URL <span>Shortner</span></h1>
      <div>
        <input
          placeholder="Paste a link to shorten it"
          type="url"
          value={input}
          onChange={inputChangeHandler}
        ></input>
        <button onClick={handlingInput}>Shorten It!</button>
      </div>
    </div>
  );
};

export default InputHandler;
