import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./pages/App/App";

import store from "./store/store";
import 'src/assets/styles/main.css'
import 'src/assets/landing/css/main.css'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


