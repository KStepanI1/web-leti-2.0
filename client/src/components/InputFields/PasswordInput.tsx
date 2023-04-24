import React, { useState } from "react";
import { Input, InputProps } from "./Input";
import { Button } from "../Buttons/Button";
import Icon from "../Icon";

interface Props extends InputProps {
  type?: "password";
}

const PasswordInput = React.forwardRef<HTMLInputElement, Props>(
  ({ value, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const InputType = showPassword ? "text" : "password";

    const EyeButton = (
      <Button
        style={{ position: "absolute", top: "4px", right: "4px" }}
        onClick={() => setShowPassword((state) => !state)}
        variant="icon"
      >
        {!showPassword ? (
          <Icon name="EyeClosed" color="#000000" />
        ) : (
          <Icon name="EyeOpened" color="#000000" />
        )}
      </Button>
    );

    return (
      <Input {...props} type={InputType} ref={ref} value={value}>
        {EyeButton}
      </Input>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
