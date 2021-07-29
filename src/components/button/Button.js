import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ fetchPhotos }) => {
  return (
    <>
      <button onClick={fetchPhotos} className="Button">
        Load more
      </button>
    </>
  );
};

Button.prototype = {
  fetchPhotos: PropTypes.func.isRequired,
};

export default Button;
