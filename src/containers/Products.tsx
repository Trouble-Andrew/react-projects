import { RootState } from 'index';
import React from 'react';
import { useSelector } from 'react-redux';

import ProductItem from '../components/Products/ProductItem';
import { Product as ProductInterface } from 'interfaces';
import './Products.scss';

const Products = () => {
  const productList = useSelector<RootState, ProductInterface[]>(
    (state) => state.shop.products,
  );

  return (
    <ul className="products-list">
      {productList.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
