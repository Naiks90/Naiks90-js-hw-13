<<<<<<< HEAD
import axios from 'axios';
const searg = 'dog';
const page = 2;
axios.defaults.baseURL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searg}&page=${page}&per_page=12&key=24996447-08cefc65ed9adacdd5c87d0b0`;

const fetchContacts = async () => {
  const { data } = await axios.get();
  const arr = console.log(data.hits);
  return arr;
};
fetchContacts();
console.log('2');
=======
import debounce from 'lodash.debounce';
import getImg from './js/get-img';
import './sass/main.scss';

let search = '';
let page = 1;

const listRef = document.querySelector('.js-galley');
const inputRef = document.querySelector('[name=query]');
const btnRef = document.querySelector("[data-action='load-more']");

inputRef.addEventListener('input', debounce(inputHendler, 500));
btnRef.addEventListener('click', btnHendler);

function btnHendler(event) {
  page += 1;
  getImg(search, page);
  listRef.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}

function inputHendler(event) {
  page = 1;
  search = event.target.value;
  listRef.innerHTML = '';
  getImg(search, page);
}
>>>>>>> 501fb5e5eec2f48168e72989126d3c9bb5e7559d
