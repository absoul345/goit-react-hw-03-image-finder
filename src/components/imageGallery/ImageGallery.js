import React from 'react';
import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ photos, toggleModal }) => {
  return (
    <div>
      <ul className="ImageGallery">
        {photos.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            toggleModal={toggleModal}
            largeImageURL={largeImageURL}
          />
        ))}
      </ul>
    </div>
  );
};

ImageGallery.prototype = {
  photos: PropTypes.array.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default ImageGallery;
