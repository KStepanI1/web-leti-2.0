import React from "react";
import { Loader } from "../Loader";
import { generateClassName } from "../../helpers/generateClassName";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "icon" | "default" | "transparent-icon";
  showLoader?: boolean;
}

const MAIN_CLASSNAME = "button";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = "default",
      className = "",
      children,
      showLoader = false,
      ...rest
    } = props;

    const ClassName = generateClassName(MAIN_CLASSNAME, variant, className);
    const ChildrenClassName = generateClassName(
      MAIN_CLASSNAME + "__children",
      showLoader ? "-hidden" : ""
    );
    const LoaderClassName = generateClassName(MAIN_CLASSNAME + "__loader");

    return (
      <button {...rest} className={ClassName} ref={ref}>
        <div className={ChildrenClassName}>{children}</div>

        {showLoader && (
          <div className={LoaderClassName}>
            <Loader size="small" />
          </div>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
