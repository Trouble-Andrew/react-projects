import React from 'react';
import ProductItem from './ProductItem';
import classes from './Products.module.scss';

const PRODUCTS = [
  {
    id: 'zh3AHmXtirbPQJP4o5mvc',
    price: 6,
    title: 'My first Book',
    description: 'This is a first product - amazing!',
  },
  {
    id: 'uaJN5ZphPkxVHPZ3xO_aO',
    price: 5,
    title: 'My second Book',
    description: 'This is a second product - amazing!',
  },
];

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            title={product.title}
            price={product.price}
            id={product.id}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
