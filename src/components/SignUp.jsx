import PropTypes from 'prop-types';
import React from 'react';
import FormField from './FormField';
import { FIELD_TYPES, FORM_KEYS, PROVIDERS } from '../constants';
import { useForm } from '../hooks';
import { characterMinimum, matchPassword, validEmail } from '../utils';

const fields = [
  { formKey: FORM_KEYS.EMAIL, label: 'Email', type: FIELD_TYPES.TEXT },
  {
    formKey: FORM_KEYS.PASSWORD,
    label: 'Password',
    type: FIELD_TYPES.PASSWORD,
  },
  {
    formKey: FORM_KEYS.PASSWORD_CONFIRM,
    label: 'Confirm Password',
    type: FIELD_TYPES.PASSWORD,
  },
];

const validators = {
  [FORM_KEYS.EMAIL]: [validEmail],
  [FORM_KEYS.PASSWORD]: [characterMinimum(4)],
  [FORM_KEYS.PASSWORD_CONFIRM]: [matchPassword],
};

const propTypes = {
  app: PropTypes.object.isRequired,
};

const SignUp = ({ app }) => {
  const { loginWithProvider, signUp, signUpError, toggleShowSignUp } = app;
  const form = useForm();

  const onSubmit = () => {
    signUp(form, validators);
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
            {`Sign Up with ${provider.label}`}
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
        className="login__button button button--block"
        onClick={onSubmit}
        type="button"
      >
        Sign Up
      </button>
      {signUpError && (
        <div className="login__error">
          <div className="login__error__icon">{'\u26A0'}</div>
          {signUpError}
        </div>
      )}
      <div className="login__signup">
        {'Already have an account? '}
        <button className="link" onClick={toggleShowSignUp} type="button">
          Log In.
        </button>
      </div>
    </div>
  );
};

SignUp.propTypes = propTypes;

export default SignUp;
