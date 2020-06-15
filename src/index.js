import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/reducers"
import { composeWithDevTools } from "redux-devtools-extension";
import GlobalStyle from "./Styles/GlobalStyle";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
     <Routes />
     <GlobalStyle />
    </Provider>,
  document.getElementById("root")
);
