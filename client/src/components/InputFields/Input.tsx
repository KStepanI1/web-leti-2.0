import React, { useState } from "react";
import { FieldWrapper, FieldWrapperProps } from "../FieldWrapper";

type RactInput = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type Union = FieldWrapperProps & RactInput;

export interface InputProps extends Union {
  label?: string;
  variant?: string;
  grouped?: "grouped" | "grouped-start" | "grouped-end";
  check?: boolean;
  childrenClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      type = "text",
      label,
      required,
      variant,
      grouped,
      hint = "Поле не должно быть пустым",
      children,
      onChange,
      onBlur,
      value,
      childrenClassName,
      ...props
    },
    ref
  ) => {
    const [error, setError] = useState(false);
    const stringValue = value?.toString();
    const ContainerClassName = `input__container${
      className ? ` ${className}__container` : ""
    }`;
    const ChildrenClassName = `input__children${
      childrenClassName ? ` ${childrenClassName}` : ""
    }`;

    // const fileUploaderRef = useRef()

    const generateClassName = () => {
      let customClassName = `input${className ? ` ${className}` : ""}`;
      const modifers = [type, grouped, variant];

      modifers.forEach((mod) => {
        if (mod) customClassName += ` -${mod}`;
      });

      if (error) customClassName += " -error";

      return customClassName;
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (required && !stringValue?.trim()) setError(true);

      if (onBlur) onBlur(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (required && value?.trim()) setError(false);
      else if (required) setError(true);

      if (onChange) onChange(e);
    };

    const Input = (
      <input
        ref={ref}
        className={generateClassName()}
        type={type}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        {...props}
      />
    );

    const Children = children && (
      <div className={ChildrenClassName}>{children}</div>
    );

    const Container = (
      <div className={ContainerClassName}>
        {Input}
        {Children}
      </div>
    );

    if (label)
      return (
        <FieldWrapper
          error={error}
          label={label}
          hint={hint}
          required={required}
        >
          {Container}
        </FieldWrapper>
      );
    else if (children) return Container;
    else return Input;
  }
);

Input.displayName = "Input";

export { Input };
