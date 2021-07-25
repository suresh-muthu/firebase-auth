import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

const confetti = () => {
  const result = [];
  for (let i = 0; i < 149; i += 1) {
    result.push(0);
  }

  return result;
};

const defaultProps = {
  children: null,
};

const propTypes = {
  children: PropTypes.node,
};

const Confetti = ({ children }) => {
  return (
    <div className="confetti">
      {useMemo(confetti, []).map(
        (_, i) => (
          <div className={`confetti-${i}`} />
        ),
        [],
      )}
      {children}
    </div>
  );
};

Confetti.defaultProps = defaultProps;
Confetti.propTypes = propTypes;

export default Confetti;
