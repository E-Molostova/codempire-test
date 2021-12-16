import { useState } from 'react';
import sprite from '../../images/sprite.svg';
import s from './SearchBar.module.css';

const SearchBar = ({ value,onChange }) => {
  return (
    <>
      <form className={s.form}>
        <input
          className={s.input}
          type="text"
          value={value}
          onChange={onChange}
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
