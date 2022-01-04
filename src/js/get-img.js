import axios from 'axios';
import galleryItem from '../templates/gallery-iteam.hbs';
import { Notyf } from 'notyf';

//

axios.defaults.baseURL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal`;

const listRef = document.querySelector('.js-galley');

export default async (search, page = 1) => {
  try {
    const reply = await axios.get(
      `&q=${search}&page=${page}&per_page=12&key=24996447-08cefc65ed9adacdd5c87d0b0`,
    );
    const markup = galleryItem(reply.data.hits);
    listRef.insertAdjacentHTML('beforeend', markup);

    const notyf = new Notyf();
    notyf.success(`Ответ от сервера: ${reply.status}`);

    return reply.data.hits;
  } catch {
    const notyf = new Notyf();
    notyf.error(`Что то не так.....`);
  }
};
