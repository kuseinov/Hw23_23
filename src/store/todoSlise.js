import { createSlice } from "@reduxjs/toolkit";

export const todoSlise = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action)  {
      state.todos.push({
        id: Math.random().toString(),
        text: action.payload.text,
      });
    },
    removeTodo(state,action){
        state.todos=state.todos.filter((todo)=>todo.id !==action.payload.id)
    }
  },
});
export const { addTodo, removeTodo } = todoSlise.actions;
export default todoSlise;
