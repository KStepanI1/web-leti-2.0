import React from "react";
import { generateClassName } from "../../helpers/generateClassName";

type SwitchValueType = {
  value: number;
  label: string;
};

interface SwitchButtonProps {
  options: SwitchValueType[];
  onChange: (e: SwitchValueType) => void;
  value: SwitchValueType;
}

const MAIN_CLASSNAME = "switch-btn";

function SwitchButton({ options, value, onChange }: SwitchButtonProps) {
  const leftValue = options[0];
  const rightValue = options[1];

  const leftActive = value.value === leftValue.value;
  const rightActive = value.value === rightValue.value;

  const ClassName = generateClassName(MAIN_CLASSNAME);
  const LeftButtonClassName = generateClassName(
    MAIN_CLASSNAME + "__btn",
    MAIN_CLASSNAME + "__left"
  );
  const RightButtonClassName = generateClassName(
    MAIN_CLASSNAME + "__btn",
    MAIN_CLASSNAME + "__right"
  );
  const LeftBgClassName = generateClassName(
    MAIN_CLASSNAME + "__bg",
    MAIN_CLASSNAME + "__left-bg"
  );
  const RightBgClassName = generateClassName(
    MAIN_CLASSNAME + "__bg",
    MAIN_CLASSNAME + "__right-bg"
  );
  const LeftBtnBoxClassName = generateClassName(
    MAIN_CLASSNAME + "__btn-box",
    MAIN_CLASSNAME + "__left-btn-box",
    {
      active: leftActive,
      inactive: !leftActive,
    }
  );
  const RightBtnBoxClassName = generateClassName(
    MAIN_CLASSNAME + "__btn-box",
    MAIN_CLASSNAME + "__right-btn-box",
    {
      active: rightActive,
      inactive: !rightActive,
    }
  );

  const handleChange = (e: SwitchValueType) => {
    if (onChange) onChange(e);
  };

  return (
    <div className={ClassName}>
      <div className={LeftBtnBoxClassName}>
        <button
          onClick={() => handleChange(leftValue)}
          className={LeftButtonClassName}
        >
          {leftValue.label}
        </button>
        <div className={LeftBgClassName}></div>
      </div>
      <div className={RightBtnBoxClassName}>
        <div className={RightBgClassName}></div>
        <button
          onClick={() => handleChange(rightValue)}
          className={RightButtonClassName}
        >
          {rightValue.label}
        </button>
      </div>
    </div>
  );
}

export default SwitchButton;
