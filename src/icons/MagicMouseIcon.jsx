import React from "react";

function MagicMouseIcon({ width, height, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
	  {...props}
      version="1.1"
      viewBox="0 0 64 64"
      xmlSpace="preserve"
    >
      <path
        fill="none"
        stroke="white"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M48 17c0-8.836-7.164-16-16-16S16 8.164 16 17v30c0 8.836 7.164 16 16 16s16-7.164 16-16V17z"
      ></path>
      <path
        fill="none"
        stroke="white"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M32 10L32 18"
      ></path>
    </svg>
  );
}

export default MagicMouseIcon;
