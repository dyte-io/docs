import React from 'react';
import Link from '@docusaurus/Link';
import PropTypes from 'prop-types';

export const ComponentsGrid = ({ children }) => {
  return <div className="grid grid-cols-4 gap-4">{children}</div>;
};

ComponentsGrid.propTypes = {
  children: PropTypes.children,
};

export const ComponentsGridItem = ({
  title,
  children,
  href,
  img,
  ...props
}) => {
  return (
    <Link className="ComponentGridItem" href={href} {...props}>
      <div className="img">
        <img src={img} className="" />
      </div>
      <h3 className="m-0 text-lg">{title}</h3>
      <p className="m-0 text-sm">{children}</p>
    </Link>
  );
};

ComponentsGridItem.propTypes = {
  children: PropTypes.children,
  title: PropTypes.string,
  href: PropTypes.string,
  img: PropTypes.string,
};
