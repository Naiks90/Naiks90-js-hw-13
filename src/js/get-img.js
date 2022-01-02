import axios from 'axios';
import galleryItem from '../templates/gallery-iteam.hbs';
axios.defaults.baseURL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal`;

const listRef = document.querySelector('.js-galley');

export default async (search, page = 1) => {
  const {
    data: { hits },
  } = await axios.get(
    `&q=${search}&page=${page}&per_page=12&key=24996447-08cefc65ed9adacdd5c87d0b0`,
  );
  const markup = galleryItem(hits);
  listRef.insertAdjacentHTML('beforeend', markup);
  return hits;
};
