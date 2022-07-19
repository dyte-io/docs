import * as React from 'react';

export default function VueIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" {...props}>
      <rect width={64} height={64} rx={10} fill="#262626" />
      <g clipPath="url(#clip0_5634_82032)">
        <path d="M46.4 11H56L32 52.4 8 11h18.36L32 20.6l5.52-9.6h8.88z" fill="#41B883" />
        <path d="M8 11l24 41.4L56 11h-9.6L32 35.84 17.48 11H8z" fill="#41B883" />
        <path d="M17.48 11L32 35.96 46.4 11h-8.88L32 20.6 26.36 11h-8.88z" fill="#35495E" />
      </g>
      <defs>
        <clipPath id="clip0_5634_82032">
          <path fill="#fff" transform="translate(8 11)" d="M0 0H48V41.4375H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
