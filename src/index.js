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
