import React from 'react';
import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem';

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

export default ImageGallery;
