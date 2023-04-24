import React from "react";
import { generateClassName } from "../helpers/generateClassName";
import { Button } from "./Buttons/Button";
import Icon from "./Icon";

type Props = {
  title: string;
  children?: React.ReactNode;
  justify?: "start" | "end" | "center" | "space-between";
  onPlusClick?: React.MouseEventHandler
};

const MAIN_CLASSNAME = "page-header";

function PageHeader({ title, children, justify = "space-between", onPlusClick }: Props) {
  const ClassName = generateClassName(MAIN_CLASSNAME, `justify-${justify}`);
  const TitleClassName = generateClassName(MAIN_CLASSNAME + "__title");
  const ChildrenClassName = generateClassName(MAIN_CLASSNAME + "__children");

  return (
    <div className={ClassName}>
      <div>
        <h2 className={TitleClassName}>{title}</h2>
        {onPlusClick && <Button 
          onClick={onPlusClick}
          variant="icon"
        >
          <Icon name="Plus" color={"var(--primary-30)"} />
          </Button>}
      </div>
      
      <div className={ChildrenClassName}>{children}</div>
    </div>
  );
}

export default PageHeader;
