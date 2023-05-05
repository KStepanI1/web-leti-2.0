import React from "react";
import { generateClassName } from "../helpers/generateClassName";
import BreadCrumbs, { BreadCrumbsType } from "./BreadCrumbs";

export interface PageHeaderProps {
  title: string;
  breadCrumbs?: BreadCrumbsType;
  children?: React.ReactNode;
  justify?: "start" | "end" | "center" | "space-between";
}

const MAIN_CLASSNAME = "page-header";

function PageHeader({ title, children, breadCrumbs, justify }: PageHeaderProps) {
  const ClassName = generateClassName(MAIN_CLASSNAME, { [`justify-${justify}`]: !!justify });
  const ChildrenClassName = generateClassName(MAIN_CLASSNAME + "__children");

  return (
    <div className={ClassName}>
      <BreadCrumbs title={title} breadCrumbs={breadCrumbs} />
      <div className={ChildrenClassName}>{children}</div>
    </div>
  );
}

export default PageHeader;
