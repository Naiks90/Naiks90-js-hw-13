// export default { options, onEntry };
import getImg from './get-img';
import search from '../index';
let page = 1;

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

export default new IntersectionObserver(onEntry, options);

// observer.observe(btnRef);
