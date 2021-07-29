import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
  webformatURL,
  tags,
  toggleModal,
  largeImageURL,
}) => {
  return (
    <div>
      <li className="ImageGalleryItem">
        <img
          src={webformatURL}
          alt={tags}
          className="ImageGalleryItem-image"
          onClick={() => toggleModal(largeImageURL, tags)}
        />
      </li>
    </div>
  );
};

ImageGalleryItem.prototype = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
