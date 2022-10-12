import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
  enhancers: [],
});

export type AppDispatch = typeof store.dispatch;
export default store;
