import sprite from '../../images/sprite.svg';
import s from './CountryDetails.module.css';

const CountryDetails = ({ countryDetails, onClose }) => {
  return (
    <>
      {countryDetails.map(({ ID, Country, TotalConfirmed, TotalDeaths, TotalRecovered }) => (
        <section key={ID} className={s.section}>
          <h2 className={s.title}>{Country}</h2>
          <ul>
            <li className={s.infoRow}>
              <svg width="30" height="26">
                <use href={sprite + '#icon-heart'} />
              </svg>
              <h3 className={s.text}>Total Confirmed</h3>
              <span className={s.quantity}>{TotalConfirmed}</span>
            </li>
            <li className={s.infoRow}>
              <svg width="30" height="30">
                <use href={sprite + '#icon-braincase'} />
              </svg>
              <h3 className={s.text}>Total Deaths</h3>
              <span className={s.quantity}>{TotalDeaths}</span>
            </li>
            <li className={s.infoRow}>
              <svg width="23" height="30">
                <use href={sprite + '#icon-recovered'} />
              </svg>
              <h3 className={s.text}>Total Recovered</h3>
              <span className={s.quantity}>{TotalRecovered}</span>
            </li>
          </ul>
          <button type="button" className={s.btn} onClick={onClose}>
            OK
          </button>
        </section>
      ))}
    </>
  );
};

export default CountryDetails;
