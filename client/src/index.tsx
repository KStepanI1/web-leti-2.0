import { createContext, Suspense, lazy, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./styles/_index.scss";
import { BrowserRouter } from "react-router-dom";
import Store from "./store/_index";
import { Loader } from "./components/Loader";

const App = lazy(() => import("./App/App"))

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export const StoreContext = createContext<typeof Store>(Store);

root.render(
    <StrictMode>
      <BrowserRouter>
        <StoreContext.Provider value={Store}>
          <Suspense fallback={<Loader size="medium" logo />}>
            <App />
          </Suspense>
        </StoreContext.Provider>
      </BrowserRouter>
    </StrictMode>
);
