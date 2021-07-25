import { useState } from 'react';

const findErrors = (validators, values) => {
  const result = {};

  Object.keys(validators).forEach(key => {
    const errors = validators[key]
      .map(validator => validator({ value: values[key], values }))
      .filter(error => error);

    if (errors.length) {
      result[key] = errors;
    }
  });

  return result;
};

const useForm = (initialValues = {}) => {
  const [state, setState] = useState({
    errors: {},
    values: initialValues,
  });

  const onChange = (formKey, value) => {
    setState(prevState => ({
      ...prevState,
      errors: {
        ...prevState.errors,
        [formKey]: [],
      },
      values: {
        ...prevState.values,
        [formKey]: value,
      },
    }));
  };

  const validate = (validators = {}) =>
    new Promise((resolve, reject) => {
      setState(prevState => {
        const errors = findErrors(validators, prevState.values);
        if (Object.keys(errors).length) {
          reject();
        } else {
          resolve();
        }

        return { ...prevState, errors };
      });
    });

  return {
    errors: state.errors,
    onChange,
    validate,
    values: state.values,
  };
};

export default useForm;
