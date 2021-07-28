import React from 'react';

const Button = ({ fetchArticles }) => {
  return (
    <>
      <button onClick={fetchArticles} className="Button">
        Load more
      </button>
    </>
  );
};

export default Button;
