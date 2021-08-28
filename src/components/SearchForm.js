// importamos componentes, imagenes y estados

import React, { useState } from 'react';
import Product from './Product';
import LastViewed from './LastViewed';
import ErrorImg from '../assets/pebrot1.png';
import NoProductImg from '../assets/search_option.png';
import Loading from './Loading';
import Carousel from 'react-elastic-carousel';

// importamos estilos css
import classes from './SearchForm.module.css';

export default function SearchForm() {
  // definimos estados
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(false);
  const [currentProduct, setCurrentProduct] = useState();

  // propiedades para el slider del historial de búsqueda
  const breakPoints = [
    { width: 1, itemsToShow: 1, pagination: false },
    { width: 550, itemsToShow: 3, pagination: false },
    { width: 850, itemsToShow: 4, pagination: false },
    { width: 1150, itemsToShow: 4, pagination: false },
    { width: 1450, itemsToShow: 5, pagination: false },
    { width: 1750, itemsToShow: 6, pagination: false },
  ];

  // Función para obtener la información de la API
  const searchBarcodeProduct = async (e) => {
    e.preventDefault();

    const url = `https://world.openfoodfacts.org/api/v0/product/${query}`;

    try {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      if (data.product !== undefined) {
        if (product.findIndex((f) => f._id === data.product._id) === -1) {
          const newSearchedList = [...product, data.product];
          setProduct(newSearchedList.reverse());
          setCurrentProduct(data.product);
        }
        setError(false);
      } else {
        setError(true);
      }
      setQuery('');
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  // Función que permite clicar en un producto del historial y que muestre su información
  const setCurrentProductFromHistoryHandler = (id) => {
    const _product = product.find((f) => f._id === id);
    setCurrentProduct(_product);
    window.scrollTo({
      top: 450,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className={[classes['section-form'], classes.search].join(' ')}>
      <form
        className={classes['search-form']}
        onSubmit={searchBarcodeProduct}
        autoComplete="off"
      >
        <div className={classes['form-control']}>
          <label htmlFor="query">INTRODUCE EL CÓDIGO DE BARRAS</label>
          <input
            type="text"
            name="query"
            placeholder="p.e. &nbsp;8 4 8 0 0 0 0 3 4 8 6 5 4"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <button className={classes['btn-plus-white']} type="submit">
            BUSCAR
          </button>
        </div>
      </form>
      <main className={classes['product-list']}>
        {!product ||
          ((product.length === 0 || !currentProduct) && (
            <>
              {!error && (
                <>
                  <h4 className={classes['no-item']}>La lista está vacía...</h4>
                  <img
                    className={classes['no-product-img']}
                    src={NoProductImg}
                    alt="lista vacia"
                  />
                </>
              )}
            </>
          ))}
        {isLoading && <Loading />}
        {!error && product.length > 0 && <h1>Resultado</h1>}
        {!error && currentProduct ? (
          <Product key={currentProduct} {...currentProduct} />
        ) : (
          error && (
            <section className={classes['error-page section']}>
              <div className={classes['error-container']}>
                <h2 className={classes['error-section-title']}>
                  No se ha encontrado el producto que buscas
                </h2>
                {product !== undefined && (
                  <button
                    className={classes['btn-plus']}
                    onClick={() => setError(false)}
                  >
                    VOLVER
                  </button>
                )}
                <img
                  className={classes['error-image']}
                  src={ErrorImg}
                  alt="not found"
                />
              </div>
            </section>
          )
        )}
        {product.length > 1 && !error && (
          <>
            <h2>Últimos vistos</h2>

            <div className={classes['historysearch-wrapper']}>
              <Carousel
                breakPoints={breakPoints}
                itemPadding={[1, 5]}
                itemsToShow={5}
              >
                {product.map((item) => (
                  <LastViewed
                    onClick={() =>
                      setCurrentProductFromHistoryHandler(item._id)
                    }
                    {...item}
                    key={item._id}
                  />
                ))}
              </Carousel>
            </div>
          </>
        )}
      </main>
    </section>
  );
}
