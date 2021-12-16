import sprite from '../../images/sprite.svg';

const CountryDetails = ({ country, countryDetails, countryDet }) => {
  console.log(country);
  console.log(countryDetails);
  console.log(countryDet);
  return (
    <>
      <svg width="30" height="26">
        <use href={sprite + '#icon-heart'} />
      </svg>
      <span>Total Confirmed</span>
    </>
  );
};

export default CountryDetails;
