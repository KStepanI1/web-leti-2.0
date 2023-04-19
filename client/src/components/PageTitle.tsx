import React from "react";
import { generateClassName } from "../helpers/generateClassName";

type Props = {
  title: string;
  children?: React.ReactNode;
};

const MAIN_CLASSNAME = "page-header";

function PageHeader({ title, children }: Props) {
  const ClassName = generateClassName(MAIN_CLASSNAME);
  const TitleClassName = generateClassName(MAIN_CLASSNAME + "__title");

  return (
    <div className={ClassName}>
      <h2 className={TitleClassName}>{title}</h2>
      {children}
    </div>
  );
}

export default PageHeader;
