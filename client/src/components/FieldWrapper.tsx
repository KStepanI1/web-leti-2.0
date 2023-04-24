import React from "react";
import Label from "./Label";

export interface FieldWrapperProps {
  children?: React.ReactNode;
  className?: string;
  label?: string;
  required?: boolean;
  error?: boolean;
  hint?: string;
}

export const FieldWrapper = ({
  children,
  className,
  label,
  required = false,
  error = false,
  hint = "Поле должно быть пустым",
  ...props
}: FieldWrapperProps) => {
  return (
    <div className={`field-wrapper ${className || ""}`} {...props}>
      <Label required={required}>{label}</Label>
      {children}
      {label && <span className="field-wrapper__hint">{error && hint}</span>}
    </div>
  );
};
