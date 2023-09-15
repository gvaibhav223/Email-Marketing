import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Sass/main.css";
import rootReducer from "./Redux/Reducer/index";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducer);
console.log("store", store);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
