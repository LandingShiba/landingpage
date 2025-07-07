import React from "react";

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2014_113)">
        <path
          d="M17.98 21.28C17.66 21.48 17.3 21.56 16.98 21.56C16.66 21.56 16.3 21.48 15.98 21.28L0.0599976 11.56V24.48C0.0599976 27.24 2.3 29.48 5.06 29.48H28.94C31.7 29.48 33.94 27.24 33.94 24.48V11.56L17.98 21.28Z"
          fill="currentColor"
        />
        <path
          d="M28.94 4.52H5.06C2.7 4.52 0.700001 6.2 0.220001 8.44L17.02 18.68L33.78 8.44C33.3 6.2 31.3 4.52 28.94 4.52Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2014_113">
          <rect
            width="33.88"
            height="33.88"
            fill="white"
            transform="translate(0.0599976 0.0599976)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MailIcon;
