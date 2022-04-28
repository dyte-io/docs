import React from 'react';
import Link from '@docusaurus/Link';
import PropTypes from 'prop-types';

export const ComponentsGrid = ({ children }) => {
  return <div className="grid grid-cols-3 gap-4">{children}</div>;
};

ComponentsGrid.propTypes = {
  children: PropTypes.children,
};

export const ComponentsGridItem = ({ title, children, href, ...props }) => {
  return (
    <Link
      className="rounded-lg border border-background-300 p-2 text-text-100 hover:text-inherit hover:no-underline"
      href={href}
      {...props}
    >
      <h3 className="m-0 text-lg">{title}</h3>
      <p className="m-0 text-sm">{children}</p>
    </Link>
  );
};

ComponentsGridItem.propTypes = {
  children: PropTypes.children,
  title: PropTypes.string,
  href: PropTypes.string,
};
