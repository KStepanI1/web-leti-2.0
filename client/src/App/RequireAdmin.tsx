import { Navigate } from "react-router-dom";
import { ROUTERS } from "../utils/constants";
import { StoreContext } from "..";
import { useContext } from "react";

function RequireAdmin({ children }: { children: JSX.Element }) {
  const { auth } = useContext(StoreContext);

  if (!auth.isAdmin || !auth.isSuper) {
    return <Navigate to={ROUTERS.HOME} replace />;
  }

  return children;
}

export { RequireAdmin };
