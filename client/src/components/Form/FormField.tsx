import React from "react";
import { generateClassName } from "../../helpers/generateClassName";
import Label from "../Label";

type Props = {
  name: string;
  children: React.ReactNode;
  required?: boolean;
};

const MAIN_CLASSNAME = "form-field";

function FormField({ name, children, required }: Props) {
  const ClassName = generateClassName(MAIN_CLASSNAME);

  return (
    <div className={ClassName}>
      <Label required={required}>{name}</Label>
      {children}
    </div>
  );
}

export default FormField;
