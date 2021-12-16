import s from './CountriesList.module.css';

const CountriesList = () => {
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
      </table>
      {/* <ol>
        <li>
          <h3>Country</h3>
          <p>quantity</p>
        </li>
      </ol> */}
    </main>
  );
};

export default CountriesList;
