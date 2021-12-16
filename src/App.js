import Container from './Components/Container';
import Header from './Components/Header';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <CountriesList />
        <CountryDetails />
      </Container>
    </>
  );
};

export default App;
