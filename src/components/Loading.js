import classes from './Loading.module.css';

// Componente loading que aparece mientras se realiza el fetch de carga de la información
const Loading = () => {
  return (
    <div className={classes['loader-container']}>
      <div className={classes['dot']}></div>
      <div className={classes['dot']}></div>
      <div className={classes['dot']}></div>
    </div>
  );
};

export default Loading;
