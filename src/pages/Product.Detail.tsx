import React from 'react';
import { useParams } from 'react-router-dom';

interface Params {
  productId: string;
}

const ProductDetail = () => {
  const params = useParams<Params>();

  console.log(params.productId);

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
