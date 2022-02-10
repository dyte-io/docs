import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

export default function GridLink({
  Icon,
  title,
  subtitle,
  className,
  ...props
}) {
  return (
    <Link
      className={clsx(
        'flex p-6 rounded-md bg-background-100 text-text break-words hover:text-text border-[1.5px] border-border transition hover:border-primary hover:no-underline hover:dyte-shadow',
        className
      )}
      {...props}
    >
      {Icon}
      <div className="flex-1 flex flex-col">
        {title && <div className="font-medium leading-6">{title}</div>}
        {subtitle && <p className="text-xs text-text-100 m-0 mt-2">{subtitle}</p>}
      </div>
    </Link>
  );
}
