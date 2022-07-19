import * as React from 'react';

export default function AngularIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" {...props}>
      <rect width={64} height={64} rx={10} fill="#262626" />
      <g clipPath="url(#clip0_5634_80959)">
        <path
          d="M9.018 16.033l22.201-7.91 22.8 7.77-3.692 29.373L31.219 55.85 12.41 45.407 9.018 16.033z"
          fill="#E23237"
        />
        <path d="M54.018 15.893L31.22 8.123v47.726l19.108-10.565 3.691-29.391z" fill="#B52E31" />
        <path
          d="M31.254 13.695L17.42 44.475l5.168-.088 2.777-6.943h12.41l3.042 7.031 4.94.088-14.503-30.868zm.035 9.862l4.676 9.773h-8.79l4.114-9.773z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="clip0_5634_80959">
          <path fill="#fff" transform="translate(9 8)" d="M0 0H45.1765V48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
