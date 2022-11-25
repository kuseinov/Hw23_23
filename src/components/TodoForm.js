import React from "react";

function TodoForm({ text, setText, onSumitHandler }) {
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={onSumitHandler}>add</button>
    </div>
  );
}

export default TodoForm;
