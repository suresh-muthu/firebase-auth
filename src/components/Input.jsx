import PropTypes from 'prop-types';
import React from 'react';

const defaultProps = {
  className: '',
  placeholder: '',
  value: '',
};

const propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

const Input = ({ className, onChange, placeholder, type, value }) => (
  <input
    className={className}
    onChange={e => {
      onChange(e.currentTarget.value);
    }}
    placeholder={placeholder}
    type={type}
    value={value}
  />
);

Input.defaultProps = defaultProps;
Input.propTypes = propTypes;

export default Input;
