import { Link } from 'react-router-dom';
import ErrorURL from '../assets/bg_app_plus.png';
import Footer from '../components/Footer';

import classes from './Error.module.css';
// en caso que el Usuario inserte por URL, p.e. dominio.es/algoaqui, se muestra una página de NO ENCONTRADA
const Error = () => {
  return (
    <>
      <section
        className={[classes['error-page'], classes['error-section']].join(' ')}
      >
        <div className={classes['error-container']}>
          <h1>Oops! Página no encontrada</h1>
          <Link to="/" className={classes['btn-plus']}>
            Volver
          </Link>
          <a
            href="https://myrealfood.app/plus"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={classes['error-url']}
              src={ErrorURL}
              alt="plan plus"
            />
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Error;
