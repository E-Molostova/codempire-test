import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar';
import logo from '../../images/logo.svg';
import s from './Header.module.css';

const Header = ({ value, onChange, onSubmit }) => {
  return (
    <>
      <header className={s.header}>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <h1 className={s.title}>Statistic</h1>
        <SearchBar value={value} onChange={onChange} onSubmit={onSubmit} />
      </header>
    </>
  );
};

export default Header;
