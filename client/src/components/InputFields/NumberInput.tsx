import React from "react";
import { Input, InputProps } from "./Input";

interface NumberInputProps extends InputProps {
  type?: "number";
  onlyPositive?: boolean;
}

const NumberInput = ({
  value,
  onChange,
  min,
  max,
  onlyPositive = false,
  ...props
}: NumberInputProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const notAllowed = ["e", "E", "+"];

    if (onlyPositive) notAllowed.push("-");

    if (notAllowed.includes(e.key)) {
      e.preventDefault();
    }

    const newValue = +(value + e.key);

    if (min && newValue < +min) {
      e.preventDefault();
    } else if (max && newValue > +max) {
      e.preventDefault();
    }
  };

  return (
    <Input
      {...props}
      type="number"
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      ref={null}
    />
  );
};

export default NumberInput;
