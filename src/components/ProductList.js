
import React from 'react';

const ProductList = ({ data }) => {
  console.log('Received data:', data);

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product, index) => (
            <tr key={index}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.popularity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
