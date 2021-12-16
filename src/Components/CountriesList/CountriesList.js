import s from './CountriesList.module.css';

const CountriesList = ({ countries, onClick }) => {
  return (
    <main>
      <table className={s.table}>
        <thead>
          <tr className={s.thead}>
            <th className={s.theadRow}>№</th>
            <th className={s.theadRow}>Country</th>
            <th className={s.theadRow}>Total Confirmed</th>
          </tr>
        </thead>

        <tbody className={s.tbody}>
          {/* {countries.map((country, index) => (
            <tr onClick={onClick} key={country.ID} className={s.tbodyRow} country={country}>
              <th>{index + 1}</th>
              <th>{country.Country}</th>
              <th>{country.TotalConfirmed}</th>
            </tr>
          ))} */}

          {countries.map(({ ID, Country, TotalConfirmed }, index) => (
            <tr onClick={onClick} key={ID} className={s.tbodyRow}>
              <th>{index + 1}</th>
              <th>{Country}</th>
              <th>{TotalConfirmed}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default CountriesList;
