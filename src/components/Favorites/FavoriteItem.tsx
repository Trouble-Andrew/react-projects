import React from 'react';

import Card from '../UI/Card';
import './FavoriteItem.scss';

interface FavoriteItemProps {
  title: string;
  description: string;
  id: string;
}

const FavoriteItem = (props: FavoriteItemProps) => {
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="favorite-item">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </Card>
  );
};

export default FavoriteItem;
