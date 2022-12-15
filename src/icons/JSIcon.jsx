import * as React from 'react';

function JSIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_2502_4649)">
        <g filter="url(#filter0_d_2502_4649)">
          <path d="M0 0h28v28H0V0z" fill="#F5DE19" />
        </g>
        <path
          d="M18.894 21.981a2.88 2.88 0 002.61 1.606c1.095 0 1.795-.547 1.795-1.305 0-.903-.72-1.227-1.924-1.754l-.66-.283c-1.908-.812-3.173-1.829-3.173-3.98 0-1.98 1.506-3.49 3.868-3.49a3.904 3.904 0 013.757 2.116l-2.065 1.32a1.795 1.795 0 00-1.696-1.132 1.148 1.148 0 00-1.264 1.132c0 .793.491 1.114 1.625 1.607l.66.283c2.245.963 3.514 1.944 3.514 4.15 0 2.378-1.868 3.68-4.377 3.68a5.075 5.075 0 01-4.814-2.7l2.144-1.25zm-9.332.23c.415.735.792 1.358 1.7 1.358.867 0 1.416-.34 1.416-1.66v-8.983h2.641v9.018c0 2.735-1.606 3.98-3.945 3.98a4.1 4.1 0 01-3.962-2.41l2.15-1.304z"
          fill="#000"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2502_4649"
          x={-4}
          y={0}
          width={36}
          height={36}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2502_4649"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_2502_4649"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_2502_4649">
          <rect width={28} height={28} rx={4} fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default JSIcon;
