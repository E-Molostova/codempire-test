import sprite from '../../images/sprite.svg';
import s from './SearchBar.module.css';

const SearchBar = ({ value, onChange, onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
  };
  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          value={value}
          onChange={onChange}
          autoComplete="off"
          autoFocus
          placeholder="Search..."
        />
        <button type="button" className={s.btn}>
          <svg width="30" height="30">
            <use href={sprite + '#icon-search'}></use>
          </svg>
        </button>
      </form>
    </>
  );
};

export default SearchBar;
