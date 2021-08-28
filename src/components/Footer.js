import LogoWhite from '../assets/logo-white.png';
import AppStore from '../assets/ic_app_store.png';
import GooglePlay from '../assets/ic_google_play.png';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <a href="https://myrealfood.app/" target="_blank" rel="noreferrer">
        <img className={classes['logo-img']} src={LogoWhite} alt="MyRealFood" />
      </a>
      <div className={classes['download-app']}>
        <h4>Descarga la APP</h4>
        <a
          href="https://apps.apple.com/es/app/myrealfood/id1458031749"
          target="_blank"
          rel="noreferrer"
        >
          <img className={classes['app-img']} src={AppStore} alt="App Store" />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=es.myrealfood.myrealfood"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={classes['app-img']}
            src={GooglePlay}
            alt="Google Play"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
