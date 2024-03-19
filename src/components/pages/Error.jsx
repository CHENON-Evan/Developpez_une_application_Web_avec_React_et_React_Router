/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import Header from '../layout/Header.jsx';
import Footer from '../layout/Footer.jsx';
import '../../styles/pages/Error.css';

function Error() {
  return (
    <div>
      <Header />
      <div className="error_title_content">
        <h1 className="error_title">404</h1>
        <h2 className="error_content">
          Oups! La page que vous demandez n'existe pas
        </h2>
        <Link to="/" className="error_link">
          <p>Retourner sur la page d'acceuil</p>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
