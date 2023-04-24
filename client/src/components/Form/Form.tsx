import React from "react";
import { generateClassName } from "../../helpers/generateClassName";

export interface FormProps
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  name?: string;
  children: React.ReactNode;
}

const MAIN_CLASSNAME = "form";

function Form({ name, children, onSubmit, className, ...props }: FormProps) {
  const ClassName = generateClassName(MAIN_CLASSNAME, className);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (onSubmit) onSubmit(e);
  };

  return (
    <form {...props} onSubmit={handleSubmit} className={ClassName}>
      <fieldset>
        {name && <legend>{name}</legend>}
        {children}
      </fieldset>
    </form>
  );
}

export default Form;
