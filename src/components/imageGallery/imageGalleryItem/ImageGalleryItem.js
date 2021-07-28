import React from 'react';

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

export default ImageGalleryItem;
