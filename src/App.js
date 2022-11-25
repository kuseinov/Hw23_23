import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { addTodo } from "./store/todoSlise";

function App() {
  const [text, setText] = useState("");
  const dispaht = useDispatch();
  
  function onSumitHandler() {
    // e.preventDefault();
    if (text.trim().length) {
      dispaht(addTodo({ text }));
      setText("");
    }
  }
  return (
    <div>
      <TodoForm onSumitHandler={onSumitHandler} text={text} setText={setText} />
      <TodoList/>
    </div>
  );
}

export default App;
