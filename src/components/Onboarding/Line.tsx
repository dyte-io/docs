/* eslint-disable no-empty-pattern */
import React from 'react';

export default function Line({ refX, pathRefs }: any) {
  return (
    <svg
      ref={refX}
      id="svg"
      className="absolute top-0 left-0 z-20 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {pathRefs.map((e: any) => (
        <path ref={e} fill="none" stroke="black" strokeWidth={2}  />
      ))}
    </svg>
  );
}
