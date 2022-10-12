import { combineReducers } from "@reduxjs/toolkit";
import todos from "./slices/TodoSlice";

const rootReducer = combineReducers({
  todos,
});

export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
