import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./styles/_index.scss";
import App from "./App/App";
import { BrowserRouter } from "react-router-dom";
import Store from "./store/_index";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export const StoreContext = createContext<typeof Store>(Store);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreContext.Provider value={Store}>
        <App />
      </StoreContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
