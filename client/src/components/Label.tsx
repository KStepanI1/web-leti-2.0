import React from "react";
import { generateClassName } from "../helpers/generateClassName";

type ReactLabel = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;

interface Props extends ReactLabel {
  required?: boolean;
  className?: string;
}

const MAIN_CLASSNAME = "label";

const Label = ({ children, className, required, ...props }: Props) => {
  const ClassName = generateClassName(MAIN_CLASSNAME, className);

  if (!children) return null;

  return (
    <label className={ClassName} {...props}>
      {children}
      {required && <span className="label__required-dot">*</span>}
    </label>
  );
};

export default Label;
