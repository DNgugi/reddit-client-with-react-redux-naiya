import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider as StoreProvider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import store from "./store";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
