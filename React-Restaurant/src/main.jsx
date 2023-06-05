import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "@/store";
import { Provider } from "react-redux";

// import 'antd/dist/reset.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
