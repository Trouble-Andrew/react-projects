import { RootState } from 'index';
import React from 'react';
import { Product as ProductInterface } from 'interfaces';
import { useSelector } from 'react-redux';

import FavoriteItem from '../components/Favorites/FavoriteItem';
import './Products.scss';

const Favorites = () => {
  const favoriteProducts = useSelector<RootState, ProductInterface[]>((state) =>
    state.shop.products.filter((p) => p.isFavorite),
  );
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
