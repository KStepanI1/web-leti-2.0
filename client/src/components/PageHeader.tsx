import React from "react";
import { generateClassName } from "../helpers/generateClassName";

type Props = {
  title: string;
  children?: React.ReactNode;
  justify?: "start" | "end" | "center" | "space-between";
};

const MAIN_CLASSNAME = "page-header";

function PageHeader({ title, children, justify = "space-between" }: Props) {
  const ClassName = generateClassName(MAIN_CLASSNAME, `justify-${justify}`);
  const TitleClassName = generateClassName(MAIN_CLASSNAME + "__title");
  const ChildrenClassName = generateClassName(MAIN_CLASSNAME + "__children");

  return (
    <div className={ClassName}>
      <h2 className={TitleClassName}>{title}</h2>
      <div className={ChildrenClassName}>{children}</div>
    </div>
  );
}

export default PageHeader;
