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
        'flex items-center p-4 rounded-md bg-background-200 text-text break-words hover:text-text border border-border transition hover:border-primary hover:no-underline hover:dyte-shadow',
        className
      )}
      {...props}
    >
      {typeof Icon === 'string' ? (
        <img src={Icon} className="h-10 md:h-12 mr-3" />
      ) : (
        <Icon className="h-12 md:h-16 mr-3" />
      )}

      <div className="flex flex-col space-y-px">
        <div className="font-medium">{title}</div>
        <p className="text-xs text-text-100 m-0">{subtitle}</p>
      </div>
    </Link>
  );
}
