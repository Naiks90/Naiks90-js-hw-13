import debounce from 'lodash.debounce';
import getImg from './js/get-img';
import './sass/main.scss';
import * as basicLightbox from 'basiclightbox';

let search = '';
let page = 1;

const listRef = document.querySelector('.js-galley');
const inputRef = document.querySelector('[name=query]');
const btnRef = document.querySelector("[data-action='load-more']");

inputRef.addEventListener('input', debounce(inputHendler, 500));
btnRef.addEventListener('click', btnHendler);
listRef.addEventListener('click', modalMenu);

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
  btnRef.classList.remove('hide');
}

function modalMenu(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  basicLightbox
    .create(
      `
  <img width="1400" height="900" src=${event.target.dataset.src}>
`,
    )
    .show();
}
const options = {
  rootMargin: '200px',
  threshold: 0,
};

const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      page += 1;
      getImg(search, page);
    }
  });
};

const observer = new IntersectionObserver(onEntry, options);

observer.observe(btnRef);
