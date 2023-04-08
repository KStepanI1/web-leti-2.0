import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ROUTERS } from "../utils/constants";

function RequireAdmin({ children }: { children: JSX.Element }) {
  const auth = useAuth();

  if (!auth.isAdmin || !auth.isSuper) {
    return <Navigate to={ROUTERS.PATH_HOME} replace />;
  }

  return children;
}

export { RequireAdmin };
