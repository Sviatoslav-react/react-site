import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App dispatch={store.dispatch.bind(store)} />
    </Provider>
  </React.StrictMode>,
);

// rerenderEntireTree(store.getState() );

// store.subscriber(() => {

//   let state = store.getState();
//   rerenderEntireTree(state);
// });
