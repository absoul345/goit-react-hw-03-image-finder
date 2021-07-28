import axios from 'axios';

const fatchPhotos = async ({ searchQuery, currentPage }) => {
  const API_KEY = '22382402-6e64c7211e25b83073e42c977';
  const BASE_URL = 'https://pixabay.com/api/';
  return await axios
    .get(
      `${BASE_URL}?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(respone => respone.data.hits);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fatchPhotos };
