
import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetching data from the given API
    fetch('https://s3.amazonaws.com/open-to-cors/assignment.json')
      .then((response) => response.json())
      .then((jsonData) => {
        
        const productsArray = Object.values(jsonData.products || {});
        
        // Ensuring it an array before performing a sort operation
        const dataArray = Array.isArray(productsArray) ? productsArray : [];
        
        // Sorting it based on the decreasing popularity
        const sortedData = dataArray.sort((a, b) => b.popularity - a.popularity);
        setData(sortedData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <ProductList data={data} />
    </div>
  );
};

export default App;
