import classes from './LastViewed.module.css';

const LastViewed = ({ image_front_url, product_name, brands, onClick }) => {
  return (
    <section onClick={onClick} className={classes['lastviewed-section']}>
      <div className={classes['list-wrapper']}>
        <img src={image_front_url} alt={product_name} />
        <div className={classes['overlay']}>
          <h4>
            {product_name}
            <br />
            <span>{brands}</span>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default LastViewed;
