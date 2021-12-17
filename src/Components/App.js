import { useState, useEffect } from 'react';
import Container from './Container';
import Header from './Header';
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';
import Modal from './Modal';
import fetchCountries from '../services/api-services';

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

  const handleOpenDetails = id => {
    const findCountryById = id => countries.filter(country => country.ID === id);
    const country = findCountryById(id);
    setCountryDetails(country);
    toggleModal();
  };

  const handleFormSubmit = searchQuery => {
    setFilter(searchQuery);
  };

  return (
    <>
      <Container>
        <Header value={filter} onChange={setFilterCountries} onSubmit={handleFormSubmit} />
        {!error && <CountriesList countries={filteredCountries()} onClick={handleOpenDetails} />}
        {showModal && (
          <Modal onClose={toggleModal}>
            <CountryDetails countryDetails={countryDetails} onClose={toggleModal} />
          </Modal>
        )}
      </Container>
    </>
  );
};

export default App;
