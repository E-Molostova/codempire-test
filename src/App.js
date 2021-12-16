import { useState, useEffect } from 'react';

import Container from './Components/Container';
import Header from './Components/Header';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';

import fetchCountries from './services/api-services';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCountries().then(setCountries).catch(setError);
  }, []);

  return (
    <>
      <Container>
        <Header />
        <CountriesList countries={countries} />
        <CountryDetails />
      </Container>
    </>
  );
};

export default App;
