import React, { useMemo } from "react";

type IconName = "Close" | "EyeOpened" | "EyeClosed" | "Magnifier" | "Setting" | "Plus" | "ArrowRight" | "ArrowLeft" | "ArrowDown" | "ArrowUp";

export interface IconProps {
  name: IconName;
  color?: string;
}

function Icon({ name, color = "#B8C1CC" }: IconProps) {
  const svg = useMemo(() => {
    switch (name) {
      case "ArrowLeft":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 7L10 12L15 17" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      case "ArrowRight":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 7L15 12L10 17" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      case "ArrowDown":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      case "ArrowUp":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 15L12 10L7 15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      case "Close":
        return (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 5.5L5.5 14.5"
              stroke={color}
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.5 14.5L5.5 5.5"
              stroke={color}
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "EyeClosed":
        return (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.7148 9.94556L17.4969 13.0321"
              stroke="#B8C1CC"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.0459 11.6611L12.6017 14.813"
              stroke="#B8C1CC"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.94745 11.6597L7.3916 14.8121"
              stroke="#B8C1CC"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.28182 9.94312L2.49121 13.0445"
              stroke="#B8C1CC"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.5 8.19336C3.81348 9.81918 6.22141 11.875 10 11.875C13.7787 11.875 16.1866 9.81919 17.5001 8.19338"
              stroke="#B8C1CC"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "EyeOpened":
        return (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 4.37451C3.75 4.37451 1.25 10.0001 1.25 10.0001C1.25 10.0001 3.75 15.6245 10 15.6245C16.25 15.6245 18.75 10.0001 18.75 10.0001C18.75 10.0001 16.25 4.37451 10 4.37451Z"
              stroke="#4587ED"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z"
              stroke="#4587ED"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "Magnifier":
        return (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.0625 15.625C12.6869 15.625 15.625 12.6869 15.625 9.0625C15.625 5.43813 12.6869 2.5 9.0625 2.5C5.43813 2.5 2.5 5.43813 2.5 9.0625C2.5 12.6869 5.43813 15.625 9.0625 15.625Z"
              stroke={color}
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.7021 13.7031L17.4991 17.5"
              stroke={color}
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
       case 'Plus':
                return (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.125 10H16.875" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 3.125V16.875" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )
      case "Setting":
        return (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.2456 7.51994C9.73423 7.46944 9.21978 7.57823 8.77266 7.8314C8.32553 8.08457 7.96759 8.46976 7.74784 8.93423C7.52809 9.39869 7.45727 9.91973 7.54508 10.426C7.63289 10.9323 7.87504 11.399 8.23837 11.7623C8.6017 12.1257 9.06845 12.3678 9.57472 12.4556C10.081 12.5434 10.602 12.4726 11.0665 12.2529C11.531 12.0331 11.9161 11.6752 12.1693 11.2281C12.4225 10.7809 12.5313 10.2665 12.4808 9.75514C12.4232 9.18193 12.1692 8.64624 11.7618 8.23887C11.3545 7.83151 10.8188 7.57752 10.2456 7.51994V7.51994ZM16.2464 10.0001C16.2448 10.271 16.2249 10.5415 16.1868 10.8097L17.9473 12.1905C18.0239 12.254 18.0756 12.3427 18.0931 12.4407C18.1105 12.5388 18.0927 12.6398 18.0427 12.7259L16.3772 15.6076C16.3266 15.6928 16.2476 15.7575 16.1539 15.7902C16.0603 15.8229 15.9582 15.8215 15.8655 15.7863L14.1171 15.0822C14.0206 15.0439 13.9162 15.03 13.8131 15.0419C13.71 15.0538 13.6115 15.0911 13.5263 15.1504C13.2595 15.3341 12.9791 15.4974 12.6875 15.6387C12.5959 15.6833 12.5166 15.7497 12.4567 15.8321C12.3968 15.9146 12.3581 16.0105 12.3441 16.1115L12.082 17.9763C12.0648 18.0748 12.0139 18.1643 11.9381 18.2294C11.8622 18.2945 11.7661 18.3313 11.6661 18.3334H8.33513C8.23683 18.3317 8.14203 18.2966 8.06636 18.2338C7.99069 18.171 7.93867 18.0843 7.91886 17.988L7.65718 16.1259C7.64248 16.0238 7.6028 15.927 7.54166 15.844C7.48051 15.7609 7.39981 15.6943 7.30671 15.65C7.01551 15.5094 6.73606 15.3458 6.47104 15.1605C6.38618 15.1015 6.28797 15.0645 6.18526 15.0529C6.08254 15.0412 5.97854 15.0553 5.88264 15.0939L4.13459 15.7976C4.04195 15.8329 3.93984 15.8343 3.84624 15.8017C3.75263 15.7691 3.67355 15.7045 3.62291 15.6192L1.95741 12.7376C1.90734 12.6515 1.88944 12.5505 1.90691 12.4524C1.92438 12.3544 1.97609 12.2657 2.05281 12.2022L3.54074 11.034C3.62226 10.9693 3.68633 10.8852 3.72713 10.7895C3.76793 10.6937 3.78417 10.5893 3.77439 10.4857C3.76037 10.3233 3.7518 10.1613 3.7518 9.99891C3.7518 9.83653 3.75998 9.67687 3.77439 9.51799C3.7831 9.41501 3.76606 9.31147 3.7248 9.21671C3.68354 9.12195 3.61935 9.03894 3.53802 8.97516L2.05087 7.80694C1.97538 7.74311 1.92477 7.65475 1.9079 7.55735C1.89102 7.45996 1.90896 7.35972 1.95858 7.27423L3.62408 4.3926C3.67465 4.30732 3.75371 4.24263 3.84732 4.20993C3.94093 4.17723 4.04308 4.17862 4.13576 4.21387L5.8842 4.91792C5.98062 4.95631 6.08506 4.97018 6.18815 4.95828C6.29125 4.94639 6.38979 4.90911 6.47493 4.84977C6.74177 4.66602 7.02217 4.50278 7.31372 4.36145C7.40537 4.3169 7.48465 4.25047 7.54455 4.16802C7.60445 4.08558 7.64313 3.98965 7.65718 3.88871L7.91925 2.02384C7.93646 1.92535 7.98734 1.83589 8.0632 1.77076C8.13905 1.70563 8.23518 1.66886 8.33513 1.66675H11.6661C11.7644 1.66845 11.8592 1.70359 11.9349 1.76637C12.0106 1.82916 12.0626 1.91584 12.0824 2.01215L12.3441 3.8743C12.3588 3.97635 12.3985 4.07319 12.4596 4.15621C12.5208 4.23923 12.6015 4.30585 12.6946 4.35016C12.9858 4.49072 13.2652 4.65441 13.5302 4.83965C13.6151 4.89868 13.7133 4.93568 13.816 4.94731C13.9187 4.95893 14.0227 4.94482 14.1186 4.90623L15.8667 4.20257C15.9593 4.1673 16.0614 4.16584 16.155 4.19847C16.2486 4.2311 16.3277 4.29571 16.3784 4.38092L18.0439 7.26254C18.0939 7.34864 18.1118 7.44971 18.0944 7.54776C18.0769 7.64581 18.0252 7.73448 17.9485 7.79798L16.4605 8.9662C16.3787 9.0307 16.3142 9.11465 16.2731 9.21041C16.2319 9.30617 16.2154 9.4107 16.2249 9.51449C16.2378 9.67571 16.2464 9.8377 16.2464 10.0001Z"
              stroke={color}
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      default:
        return <svg></svg>;
    }
  }, [name, color]);

  return svg;
}

export default Icon;
