import "normalize.css";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ROUTERS } from "../utils/constants";

import Layout from "../pages/Layout";
import { Suspense, useContext, useEffect, useMemo } from "react";
import { AUTH_ROUTERS, PUBLIC_ROUTERS } from "../roters";
import { RequireAdmin } from "./RequireAdmin";
import { StoreContext } from "..";
import { Loader } from "../components/Loader";

function App() {
  const { main } = useContext(StoreContext);

  useEffect(() => {
    main.updateSettings();

    return () => {
      main.cancelUpdates();
    };
  }, []);

  const PUBLIC = useMemo(() => {
    return PUBLIC_ROUTERS.map(({ index, path, Component }) => (
      <Route
        key={`router_${path}`}
        index={index}
        element={
          <Suspense fallback={<Loader size="medium" />}>
            <Component />
          </Suspense>
        }
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
            <Suspense fallback={<Loader size="medium" />}>
              <Component />
            </Suspense>
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
