import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

export default function GridLink({
  Icon,
  title,
  subtitle,
  className,
  iconClassName,
  ...props
}) {
  return (
    <Link
      className={clsx(
        'flex items-center p-6 rounded-md bg-background-100 text-text break-words hover:text-text border-[1.5px] border-border transition hover:border-primary hover:no-underline hover:dyte-shadow',
        className
      )}
      {...props}
    >
      {typeof Icon === 'string' ? (
        <img src={Icon} className={clsx('h-8 mr-6', iconClassName)} />
      ) : (
        <Icon
          className={clsx('h-12 md:h-16 mr-4 text-primary', iconClassName)}
        />
      )}

      <div className="flex flex-col space-y-px">
        {title && <div className="font-medium">{title}</div>}
        {subtitle && <p className="text-xs text-text-100 m-0">{subtitle}</p>}
      </div>
    </Link>
  );
}
