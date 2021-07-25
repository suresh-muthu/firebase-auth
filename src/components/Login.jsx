import PropTypes from 'prop-types';
import React from 'react';
import FormField from './FormField';
import { FIELD_TYPES, FORM_KEYS, PROVIDERS } from '../constants';
import { useForm } from '../hooks';
import { characterMinimum, validEmail } from '../utils';

const fields = [
  { formKey: FORM_KEYS.EMAIL, label: 'Email', type: FIELD_TYPES.TEXT },
  {
    formKey: FORM_KEYS.PASSWORD,
    label: 'Password',
    type: FIELD_TYPES.PASSWORD,
  },
];

const validators = {
  [FORM_KEYS.EMAIL]: [validEmail],
  [FORM_KEYS.PASSWORD]: [characterMinimum(4)],
};

const propTypes = {
  app: PropTypes.object.isRequired,
};

const Login = ({ app }) => {
  const { login, loginError, loginWithProvider, toggleShowSignUp } = app;
  const form = useForm();

  const onSubmit = () => {
    login(form, validators);
  };

  return (
    <div className="login">
      <div className="login__providers">
        {PROVIDERS.map(provider => (
          <button
            className="login__provider button button--block"
            onClick={() => {
              loginWithProvider(provider.provider);
            }}
            type="button"
          >
            <img
              className="login__provider__icon"
              alt={`${provider.label} logo`}
              src={provider.img}
            />
            {`Log In with ${provider.label}`}
          </button>
        ))}
      </div>
      <div className="login__or">or</div>
      <div className="login__fields">
        {fields.map(field => (
          <FormField {...field} form={form} key={field.formKey} />
        ))}
      </div>
      <button
        className="login__button button button--block button--primary"
        onClick={onSubmit}
        type="button"
      >
        Log In
      </button>
      {loginError && (
        <div className="login__error">
          <div className="login__error__icon">{'\u26A0'}</div>
          {loginError}
        </div>
      )}
      <div className="login__signup">
        {"Don't have an account? "}
        <button className="link" onClick={toggleShowSignUp} type="button">
          Sign Up.
        </button>
      </div>
    </div>
  );
};

Login.propTypes = propTypes;

export default Login;
