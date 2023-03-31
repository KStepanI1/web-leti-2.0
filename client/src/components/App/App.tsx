import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ROUTERS } from '../../utils/constants';

import Layout from '../pages/Layout';
import Home from '../pages/Home';
import Timetable from '../pages/Timetable';

function App() {
  return (
    <div className="App">
    <ToastContainer />
    <Routes>
      <Route element={<Layout />} path={ROUTERS.PATH_LAYOUT}>
         <Route index element={<Home />} />
         <Route path={ROUTERS.PATH_TIMETABLE} element={<Timetable />} />
        {/* <Route path={APP_ROUTES_CONFIG.newLab.path} element={<Suspense fallback={<Loader size="medium" />}><NewLab /></Suspense>} />
        <Route path={APP_ROUTES_CONFIG.lab.path} element={<Suspense fallback={<Loader size="medium" />}><LabPage /></Suspense>} />
        <Route
          path={APP_ROUTES_CONFIG.resultViewer.path}
          element={<ResultViewer />}
        /> */}
      </Route>
    </Routes>
  </div>
  );
}

export default App;
