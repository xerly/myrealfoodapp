// Utilizo Material UI para algunos iconos
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';

// importamos los estilos
import classes from './Product.module.css';

export default function Product({
  image_front_url,
  product_name,
  product_name_en,
  product_name_es,
  product_name_fr,
  brands,
  ingredients_text,
  nutriments,
  nutrition_data_per,
  nutriscore_data,
  nova_group,
}) {
  return (
    <div className={classes['product-wrapper']}>
      <section className={classes['section']}>
        {product_name ||
        product_name_en ||
        product_name_es ||
        product_name_fr ? (
          <div className={classes['product-card']}>
            <img
              className={classes['product-card--image']}
              src={image_front_url}
              alt={product_name}
            />
            <div className={classes['product-card--content']}>
              {product_name ? (
                <h3 className={classes['card--title']}>{product_name}</h3>
              ) : (
                <h3 className={classes['card--title']}>{product_name_en}</h3>
              )}
              <p className={classes['brand-title']}>{brands}</p>
              {ingredients_text && (
                <p>
                  <b>Ingredientes:</b> <small>{ingredients_text}</small>
                </p>
              )}
              <p className={classes['nutritional-title']}>
                <b>Información nutricional</b> (por {nutrition_data_per})
              </p>
              <div className={classes['info-divider']}></div>
              <p>
                <b>Valor energético:</b> {nutriments?.energy}kcal
              </p>
              <p>
                <b>Grasas:</b> {nutriments?.fat}g
              </p>
              <p>
                <small>
                  de las cuales saturadas: {nutriscore_data?.saturated_fat}g
                </small>
              </p>
              <p>
                <b>Carbohidratos:</b> {nutriments?.carbohydrates_100g}g
              </p>
              <p>
                <small>de los cuales azúcares: {nutriments?.sugars}g</small>
              </p>
              <p>
                <b>Fibra:</b> {nutriments?.fiber}g
              </p>
              <p>
                <b>Proteína:</b> {nutriments?.proteins_100g}g
              </p>
              <p>
                <b>Sal:</b> {nutriments?.sodium_100g}g
              </p>
              {nova_group && (
                <p className={classes['nova-space']}>
                  <span
                    className={`${
                      nova_group === 1 &&
                      [classes.nova, classes['nova-green']].join(' ')
                    } 
                      ${
                        nova_group === 2 &&
                        [classes.nova, classes['nova-yellow']].join(' ')
                      } 
                        ${
                          nova_group === 3 &&
                          [classes.nova, classes['nova-orange']].join(' ')
                        } 
                          ${
                            nova_group === 4 &&
                            [classes.nova, classes['nova-red']].join(' ')
                          } 
 
                    `}
                  >
                    <b>NOVA {nova_group}</b>
                  </span>
                  <a
                    title="NOVA GROUP"
                    href="https://es.openfoodfacts.org/nova"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <InfoRoundedIcon fontSize="small" />
                  </a>
                </p>
              )}
            </div>
          </div>
        ) : null}
      </section>
      <div className={classes['product-divider']}></div>
    </div>
  );
}
