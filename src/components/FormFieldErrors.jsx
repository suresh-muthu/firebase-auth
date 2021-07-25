import PropTypes from 'prop-types';
import React from 'react';

const defaultProps = {
  errors: [],
};

const propTypes = {
  errors: PropTypes.array,
};

const FormFieldErrors = ({ errors }) => {
  if (errors.length) {
    return (
      <div className="form-field__errors">
        {errors.map(error => (
          <div className="form-field__error">{`${'\u26A0'} ${error}`}</div>
        ))}
      </div>
    );
  }

  return null;
};

FormFieldErrors.defaultProps = defaultProps;
FormFieldErrors.propTypes = propTypes;

export default FormFieldErrors;
