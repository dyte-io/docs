import React from 'react';

function KotlinIcon(props) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={48} height={48} rx={10} fill="#262626" />
      <path
        d="M10.875 10.875v26.25h26.25v-.044l-6.516-6.563-6.515-6.569 6.515-6.573 6.458-6.501H10.875z"
        fill="url(#kotlin_icon_a)"
      />
      <path
        d="M24.298 10.875L10.875 24.298v12.827h.116l13.133-13.133-.03-.029 6.515-6.572 6.458-6.516H24.298z"
        fill="url(#kotlin_icon_b)"
      />
      <defs>
        <linearGradient
          id="kotlin_icon_a"
          x1={10.582}
          y1={37.384}
          x2={37.153}
          y2={10.517}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0296D8" />
          <stop offset={1} stopColor="#8371D9" />
        </linearGradient>
        <linearGradient
          id="kotlin_icon_b"
          x1={7.316}
          y1={33.198}
          x2={34.496}
          y2={8.517}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CB55C0" />
          <stop offset={1} stopColor="#F28E0E" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default KotlinIcon;
