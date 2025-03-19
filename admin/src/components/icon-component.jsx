import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon, label, className = '' }) => (
  <div className={` ${className}`}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      {icon}
    </svg>
    <span>{label}</span>
  </div>
);

Icon.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon;
