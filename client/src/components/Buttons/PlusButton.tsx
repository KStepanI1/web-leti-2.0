import Icon from "../Icon";
import { ButtonProps } from "./Button";
import { Button } from "./Button";

function PlusButton({
  variant = "icon",
  color = "white",
  ...props
}: ButtonProps) {
  return (
    <Button {...props} ref={null} variant={variant}>
      <Icon name="Plus" color={color} />
    </Button>
  );
}

export default PlusButton;
