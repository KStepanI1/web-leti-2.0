import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ROUTERS } from "../utils/constants";

import Layout from "../components/pages/Layout";
import { useMemo } from "react";
import { AUTH_ROUTERS, PUBLIC_ROUTERS } from "../roters";
import { RequireAdmin } from "./RequireAdmin";

function App() {
  const PUBLIC = useMemo(() => {
    return PUBLIC_ROUTERS.map(({ index, path, Component }) => (
      <Route
        key={`router_${path}`}
        index={index}
        element={<Component />}
        path={path}
      />
    ));
  }, []);

  const PRIVATE = useMemo(() => {
    return AUTH_ROUTERS.map(({ path, Component }) => (
      <Route
        key={`router_${path}`}
        element={
          <RequireAdmin>
            <Component />
          </RequireAdmin>
        }
        path={path}
      />
    ));
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route element={<Layout />} path={ROUTERS.PATH_HOME}>
          {PUBLIC}
          {PRIVATE}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
