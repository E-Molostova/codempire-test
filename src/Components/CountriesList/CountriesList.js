import s from './CountriesList.module.css';

const CountriesList = ({ countries, onClick }) => {
  return (
    <main>
      <table className={s.table}>
        <thead>
          <tr className={s.thead}>
            <th className={s.theadIndex}>№</th>
            <th className={s.theadCountryName}>Country</th>
            <th className={s.theadQuantity}>Total Confirmed</th>
          </tr>
        </thead>

        <tbody className={s.tbody}>
          {countries.map(({ ID, Country, TotalConfirmed }, index) => (
            <tr onClick={() => onClick(ID)} key={ID} className={s.tbodyRow}>
              <th className={s.tbodyIndex}>{index + 1}</th>
              <th className={s.tbodyCountryName}>{Country}</th>
              <th className={s.tbodyQuantity}>{TotalConfirmed}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default CountriesList;
