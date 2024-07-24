import React, { useEffect, useState } from 'react';
import './NewCollections.css';
import { url_backend } from '../../services';
import axios from 'axios';
import Item from '../item/Item';
const NewCollections = () => {
  const [new_collections, setNew_collections] = useState([]);

  useEffect(() => {
    const fetchNewCollection = async () => {
      try {
        const resNewCollection = await axios.get(
          `${url_backend}/newcollections`
        );

        if (resNewCollection.data) {
          setNew_collections(resNewCollection.data);
        } else {
          alert(resNewCollection.data.error);
        }
      } catch (error) {
        alert('Error Occur In System');
      }
    };
    fetchNewCollection();
  }, []);
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item, index) => {
          return (
            <Item
              key={index}
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

export default NewCollections;
