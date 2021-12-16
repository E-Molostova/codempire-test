import axios from 'axios';

const fetchCountries = () => {
  const BASE_URL = 'https://api.covid19api.com';
  return axios.get(`${BASE_URL}/summary`).then(res => res.data.Countries);
};
console.log(fetchCountries());

export default fetchCountries;
