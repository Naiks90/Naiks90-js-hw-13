import axios from 'axios';
const searg = 'html';
const page = 2;
axios.defaults.baseURL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searg}&page=${page}&per_page=12&key=24996447-08cefc65ed9adacdd5c87d0b0`;

const fetchContacts = async () => {
  const { data } = await axios.get();
  const arr = console.log(data.hits);
  return arr;
};
fetchContacts();
console.log('2');
