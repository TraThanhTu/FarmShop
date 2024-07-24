import React, { useEffect, useState } from 'react';
import '../popular/Popular.css';
import Item from '../item/Item';
import axios from 'axios';
import { url_backend } from '../../services';
const Popular = () => {
  const [data_product, setData_Product] = useState([]);

  useEffect(() => {
    const fetchPopularFruit = async () => {
      const resPopularFruit = await axios.get(`${url_backend}/popularfruit`);
      if (resPopularFruit.data) {
        setData_Product(resPopularFruit.data);
      } else {
        alert('Error System');
      }
    };
    fetchPopularFruit();
  }, []);
  return (
    <div className="popular">
      <h1>POPULAR IN FRUIT</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
