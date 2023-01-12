import React from 'react';

export default function KotlinIcon(props) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={28} height={28} rx={4} fill="#262626" />
      <path
        d="M6.344 6.344v15.312h15.312v-.025l-3.8-3.829-3.801-3.832 3.8-3.834 3.767-3.792H6.344z"
        fill="url(#paint0_linear_2615_19807)"
      />
      <path
        d="M14.174 6.344l-7.83 7.83v7.482h.068l7.66-7.66-.017-.017 3.8-3.834 3.767-3.801h-7.448z"
        fill="url(#paint1_linear_2615_19807)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2615_19807"
          x1={6.17291}
          y1={21.8071}
          x2={21.6725}
          y2={6.13466}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0296D8" />
          <stop offset={1} stopColor="#8371D9" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2615_19807"
          x1={4.26782}
          y1={19.3653}
          x2={20.1229}
          y2={4.96797}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CB55C0" />
          <stop offset={1} stopColor="#F28E0E" />
        </linearGradient>
      </defs>
    </svg>
  );
}
