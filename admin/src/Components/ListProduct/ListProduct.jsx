import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import axios from 'axios';
import { url_admin } from '../../service';
import cross_icon from '../../assets/cross_icon.png';
const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const getInfo = async () => {
    try {
      const infoProducts = await axios.get(`${url_admin}/allproducts`);
      if (infoProducts) {
        setAllProducts(infoProducts.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getInfo();
  }, []);
  const remove_product = async (idProduct) => {
    try {
      const removeProduct = await axios.post(`${url_admin}/removeproduct`, {
        id: idProduct,
      });
      await getInfo();
    } catch (error) {}
  };
  return (
    <div className="listproduct">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Catetory</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => {
          return (
            <>
              <div
                key={index}
                className="listproduct-format-main listproduct-fomat"
              >
                <img
                  src={product.image}
                  alt=""
                  className="listproduct-product-icon"
                />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img
                  onClick={() => remove_product(product.id)}
                  src={cross_icon}
                  className="listproduct-remove-icon"
                  alt=""
                />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
