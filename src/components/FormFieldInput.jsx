import PropTypes from 'prop-types';
import React from 'react';
import Input from './Input';

const propTypes = {
  type: PropTypes.string.isRequired,
};

const FormFieldInput = ({ type, ...props }) => {
  switch (type) {
    default:
      return <Input {...props} className="form-field__input" type={type} />;
  }
};

FormFieldInput.propTypes = propTypes;

export default FormFieldInput;
