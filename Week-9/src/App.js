import "./App.css";
import React,{useState} from "react";
import Form from "./compoents/form";
import DisplayToDoList from "./compoents/display";

function App() {
  const [submittedLists,setSubmittedList]=useState([]);
  const displayItems=(items)=>{
    setSubmittedList((previous)=>[...items,...previous]);
  };
  return (
    <React.Fragment >
      <div className="box">
      <Form onSubmiting={displayItems}></Form>
      </div>
      <div className="box">
      <DisplayToDoList listItems={submittedLists}></DisplayToDoList>
      </div>
    </React.Fragment>
  );
}

export default App;
