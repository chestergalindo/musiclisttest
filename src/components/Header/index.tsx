import './style.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const Header = () => (
  <>
    <Helmet>
      <link rel="preconnect" href="ttps://i8rmpiaad2.execute-api.us-east-1.amazonaws.com" />
    </Helmet>
    <header>
      <Link to="/randomsong">
        <h1>Random song</h1>
      </Link>
      <Link to="/">
        <h5> Lista de artistas</h5>
      </Link>
    </header>
  </>
);
