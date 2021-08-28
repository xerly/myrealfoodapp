import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={classes.container}>
      <nav>
        <Link to="/">
          <img className={classes['logo-img']} src={Logo} alt="MyRealFood" />
        </Link>
        <a
          className={classes['btn-plus']}
          href="https://myrealfood.app/plus"
          target="_blank"
          rel="noreferrer"
        >
          DESCUBRE EL PLAN PLUS
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
