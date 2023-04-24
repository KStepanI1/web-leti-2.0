import React from "react";
import { Button, ButtonProps } from "./Button";
import Icon from "../Icon";

interface CloseButtonProps extends Omit<ButtonProps, "variant" | "ref"> {
  iconColor?: string;
}

const CloseButton = React.forwardRef<HTMLButtonElement, CloseButtonProps>(
  ({ iconColor, ...props }, ref) => {
    return (
      <Button {...props} ref={ref} variant="transparent-icon">
        <Icon name="Close" color={iconColor} />
      </Button>
    );
  }
);

CloseButton.displayName = "CloseButton";

export default CloseButton;
