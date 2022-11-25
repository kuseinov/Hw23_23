import { configureStore } from "@reduxjs/toolkit";
import { todoSlise } from "./todoSlise";

export default configureStore({
  reducer: {
    todo: todoSlise.reducer
  },
});
