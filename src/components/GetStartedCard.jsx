import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { Github as GithubIcon } from '@styled-icons/boxicons-logos';

const GetStartedCard = ({
  title,
  getStartedLink,
  repoLink,
  getStartedText = 'Get Started',
  Icon = GithubIcon,
  BGIcon,
  className,
  bgClassName,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'relative flex flex-col p-4 cursor-pointer bg-gradient-to-r rounded-md space-y-4 overflow-hidden shadow-md hover:shadow-xl',
        className
      )}
    >
      <div className="text-lg text-white font-bold">{title}</div>
      <div className="flex items-center space-x-4">
        <Link
          className="px-3 py-2 text-sm rounded-sm bg-white text-black hover:text-gray-800 hover:no-underline"
          to={getStartedLink}
        >
          {getStartedText}
        </Link>
        <Link to={repoLink} className="text-white hover:text-gray-300">
          <Icon className="h-8" />
        </Link>
      </div>
      <BGIcon
        className={clsx(
          'absolute block h-24 mix-blend-luminosity',
          bgClassName
        )}
      />
    </div>
  );
};

export default GetStartedCard;
