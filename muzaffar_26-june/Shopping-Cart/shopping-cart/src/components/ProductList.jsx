import React from 'react';
import Product from './Product';

const productsData = [
  { id: 1, name: 'T-shirt', price: 20 },
  { id: 2, name: 'Sneakers', price: 50 },
  { id: 3, name: 'Backpack', price: 35 },
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="products">
      <h2>🛍️ Products</h2>
      {productsData.map(product => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
