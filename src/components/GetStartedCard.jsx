import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { Github as GithubIcon } from '@styled-icons/boxicons-logos';
import PropTypes from 'prop-types';

const GetStartedCard = ({
  title,
  getStartedLink,
  repoLink,
  getStartedText = 'Get Started',
  Icon = GithubIcon,
  BGIcon,
  className,
  bgClassName,
}) => {
  return (
    <div
      className={clsx(
        'relative flex flex-col space-y-4 overflow-hidden rounded-[0.25rem] bg-gradient-to-r p-4 shadow-md hover:shadow-xl',
        className
      )}
    >
      <div className="z-[1] text-lg font-bold text-white">{title}</div>
      <div className="flex items-center space-x-4">
        <Link
          className="z-[1] rounded-sm bg-white px-3 py-2 text-sm text-black transition hover:text-gray-800 hover:no-underline hover:shadow-lg"
          to={getStartedLink}
        >
          {getStartedText}
        </Link>
        <Link
          to={repoLink}
          className="z-[1] text-white transition hover:text-gray-300"
        >
          <Icon className="z-[1] h-8" />
        </Link>
      </div>
      <BGIcon
        className={clsx(
          'absolute z-0 block h-24 bg-scroll mix-blend-luminosity',
          bgClassName
        )}
      />
    </div>
  );
};

GetStartedCard.propTypes = {
  title: PropTypes.string,
  getStartedLink: PropTypes.string,
  getStartedText: PropTypes.string,
  repoLink: PropTypes.string,
  Icon: PropTypes.element,
  BGIcon: PropTypes.func,
  className: PropTypes.string,
  bgClassName: PropTypes.string,
};

export default GetStartedCard;
