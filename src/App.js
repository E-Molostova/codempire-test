import { useState, useEffect } from 'react';

import Container from './Components/Container';
import Header from './Components/Header';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';

import fetchCountries from './services/api-services';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchCountries().then(setCountries).catch(setError);
  }, []);

  const setFilterCountries = e => {
    setFilter(e.target.value);
  };
  const filteredCountries = () =>
    countries.filter(({ Country }) => Country.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <Container>
        <Header value={filter} onChange={setFilterCountries} />
        <CountriesList countries={filteredCountries()} />
        <CountryDetails />
      </Container>
    </>
  );
};

export default App;
