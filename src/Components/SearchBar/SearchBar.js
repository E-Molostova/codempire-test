import { useState } from 'react';
import sprite from '../../images/sprite.svg';
import s from './SearchBar.module.css';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  const handleInputChange = e => {
    setSearch(e.target.value);
  };

  return (
    <>
      <form className={s.form}>
        <input
          className={s.input}
          type="text"
          value={search}
          onChange={handleInputChange}
          autoComplete="off"
          autoFocus
          placeholder="Search..."
        />
        <button type="submit" className={s.btn}>
          <svg width="30" height="30">
            <use href={sprite + '#icon-search'}></use>
          </svg>
        </button>
      </form>
    </>
  );
};

export default SearchBar;
