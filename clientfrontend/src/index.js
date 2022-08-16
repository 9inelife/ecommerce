import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId="J8XLBQ1cVv0s1if54n1kK9cwRQk4adeeuJnHQG5t" serverUrl="https://gkglgfw1sxxx.usemoralis.com:2053/server">
      <BrowserRouter>
      <Provider store={store}>
        <App />
        </Provider>
      </BrowserRouter>
    </MoralisProvider>
  </React.StrictMode>,
  
  document.getElementById("root")
);
