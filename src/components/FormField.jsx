import PropTypes from 'prop-types';
import React from 'react';
import FormFieldErrors from './FormFieldErrors';
import FormFieldInput from './FormFieldInput';

const defaultProps = {
  placeholder: '',
};

const propTypes = {
  form: PropTypes.object.isRequired,
  formKey: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
};

const FormField = ({ form, formKey, label, placeholder, type }) => {
  const { errors, onChange, values } = form;

  return (
    <div className="form-field">
      <div className="form-field__label">{label}</div>
      <FormFieldInput
        onChange={value => onChange(formKey, value)}
        placeholder={placeholder}
        type={type}
        value={values[formKey]}
      />
      <FormFieldErrors errors={errors[formKey]} />
    </div>
  );
};

FormField.defaultProps = defaultProps;
FormField.propTypes = propTypes;

export default FormField;
