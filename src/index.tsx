import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

// import {configureStore} from '@reduxjs/toolkit';

// import logger from 'redux-logger';

// const rootReducer = {}

// const preloadedState = {
//   todos: [
//     {
//       text: 'Eat foot',
//       completed: true,
//     },
//     {
//       text: 'Exercise',
//       completed: false
//     },
//   ],
//   visibilityFilter: 'SHOW_COMPLTED',
// }

// const store = configureStore({reducer: rootReducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), devTools: process.env.NODE_ENV !== 'production', preloadedState, enhancers: []})

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
