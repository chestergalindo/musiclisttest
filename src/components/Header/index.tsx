import './style.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <Link to="/randomsong">
        <h1>Random song</h1>
      </Link>
      <Link to="/">
        <h5> Lista de artistas</h5>
      </Link>
    </header>
  );
};
