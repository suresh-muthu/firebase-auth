export const characterMinimum = n => ({ value }) => {
  if (value && value.trim().length >= n) {
    return null;
  }

  return `Please enter at least ${n} characters`;
};

export const matchPassword = ({ value, values }) => {
  const { password } = values;
  if (value && value === password) {
    return null;
  }

  return "Passwords don't match";
};

export const validEmail = ({ value }) => {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return null;
  }

  return 'Please enter a valid email';
};
