import React, { useEffect, useRef, useState } from "react";
import { generateClassName } from "../helpers/generateClassName";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "../utils/constants";

interface LogoProps {
  loader?: boolean;
  strokeWidth?: number;
  size: "x-small" | "small" | "medium" | "large";
}

const MAIN_CLASSNAME = "logo";

function Logo({ loader = false, strokeWidth = 3, size }: LogoProps) {
  const radius = size === "small" ? 30 : size === "medium" ? 60 : 120;
  const ClassName = generateClassName(MAIN_CLASSNAME, size, { loader });
  const TextClassName = generateClassName(MAIN_CLASSNAME + "__text");
  const CircleClassName = generateClassName(MAIN_CLASSNAME + "__circle");
  const innerRadius = radius - strokeWidth;

  const navigate = useNavigate();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={radius * 3.5}
      height={radius * 2}
      fill="transparent"
      strokeWidth={strokeWidth}
      className={ClassName}
      onClick={() => !loader && navigate(ROUTERS.PATH_HOME)}
    >
      <g
        transform={`rotate(36 ${radius} ${radius})`}
        className={MAIN_CLASSNAME + "__circle-box"}
      >
        <circle
          className={CircleClassName}
          cx={radius}
          cy={radius}
          r={innerRadius}
          strokeDasharray={2 * Math.PI * innerRadius * 0.8 + " 1000"}
        ></circle>
      </g>
      <g>
        <text
          className={TextClassName}
          fontSize={radius}
          transform={`translate 10 ${radius} ${radius}`}
          x={radius}
          y={radius}
          strokeWidth={strokeWidth}
          dominantBaseline="central"
        >
          0372
        </text>
      </g>
    </svg>
  );
}

export default Logo;
