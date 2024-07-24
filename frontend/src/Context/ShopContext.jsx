import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { url_backend } from '../services';
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }

  return cart;
};
const ShopContextProvider = (props) => {
  const [all_products, setAll_Products] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    const fetchAllProduct = async () => {
      try {
        const resAllProduct = await axios.get(`${url_backend}/allproducts`);

        if (resAllProduct.data) {
          setAll_Products(resAllProduct.data);
        } else {
          alert(resAllProduct.data.error);
        }
      } catch (error) {
        alert('Error Occur In System');
      }
    };
    const getCart = async (req, res) => {
      const resGetCart = await axios.post(`${url_backend}/getcart`, '', {
        headers: {
          'auth-token': `${localStorage.getItem('auth-token')}`,
        },
      });
      setCartItems(resGetCart.data);
    };
    if (localStorage.getItem('auth-token')) {
      getCart();
    }

    fetchAllProduct();
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem('auth-token')) {
      const resAddCart = axios.post(
        `${url_backend}/addtocart`,
        {
          itemId,
        },

        {
          headers: {
            'auth-token': `${localStorage.getItem('auth-token')}`,
          },
        }
      );
      console.log(resAddCart.data);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem('auth-token')) {
      const resRemoveCart = axios.post(
        `${url_backend}/removefromcart`,
        {
          itemId,
        },

        {
          headers: {
            'auth-token': `${localStorage.getItem('auth-token')}`,
          },
        }
      );
      console.log(resRemoveCart.data);
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find(
          (product) => product.id === Number(item)
        );

        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }

    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }

    return totalItem;
  };
  const contextValue = {
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
