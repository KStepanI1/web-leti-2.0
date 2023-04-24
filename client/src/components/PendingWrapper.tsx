import React from "react";
import { Loader } from "./Loader";

interface PendingWrapper<T extends object> {
  data?: T | null;
  children: JSX.Element;
}

function PendingWrapper<T extends object>({
  data,
  children,
}: PendingWrapper<T>) {
  if (!data) return <Loader size="medium" />;

  return children;
}

export default PendingWrapper;
