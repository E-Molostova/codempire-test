import { useState, useEffect } from 'react';

import Container from './Components/Container';
import Header from './Components/Header';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';
import Modal from './Components/Modal';

import fetchCountries from './services/api-services';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [countryDetails, setCountryDetails] = useState(null);

  useEffect(() => {
    fetchCountries().then(setCountries).catch(setError);
  }, []);

  const setFilterCountries = e => {
    setFilter(e.target.value);
  };
  const filteredCountries = () =>
    countries.filter(({ Country }) => Country.toLowerCase().includes(filter.toLowerCase()));

  const toggleModal = () => {
    setShowModal(prevModal => !prevModal);
  };

  const handleOpenDetails = e => {
    console.log(e);
    setCountryDetails(e.target);

    toggleModal();
  };

  return (
    <>
      <Container>
        <Header value={filter} onChange={setFilterCountries} />
        {!error && <CountriesList countries={filteredCountries()} onClick={handleOpenDetails} />}
        {showModal && (
          <Modal onClose={toggleModal}>
            <CountryDetails countryDetails={countryDetails} />
          </Modal>
        )}
      </Container>
    </>
  );
};

export default App;
