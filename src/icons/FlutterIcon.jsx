import * as React from 'react';

export default function FlutterIcon(props) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}>
      <rect width={48} height={48} rx={10} fill="#262626" />
      <g clipPath="url(#clip0)">
        <path
          d="M27.226 5.908L8.86 24.272l5.684 5.684 24.05-24.048h-11.37zM27.098 22.843l-9.832 9.833 5.705 5.79 5.674-5.673 9.95-9.95H27.098z"
          fill="#47C5FB"
        />
        <path d="M22.97 38.467l4.32 4.319h11.304l-9.95-9.993-5.673 5.674z" fill="#00569E" />
        <path d="M17.201 32.74l5.684-5.685 5.76 5.738-5.674 5.674-5.77-5.727z" fill="#00B5F8" />
        <path
          d="M22.97 38.467l4.725-1.568.47-3.626-5.194 5.194z"
          fill="url(#paint0_linear)"
          fillOpacity={0.8}
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1={23.176}
          y1={34.6749}
          x2={26.9125}
          y2={36.0213}
          gradientUnits="userSpaceOnUse">
          <stop />
          <stop offset={1} stopOpacity={0} />
        </linearGradient>
        <clipPath id="clip0">
          <path fill="#fff" d="M8.86133 5.90771H38.67933V42.83081H8.86133z" />
        </clipPath>
      </defs>
    </svg>
  );
}
