import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../../assets/star_icon.png';
import star_dull_icon from '../../assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        {/* <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(112)</p>
        </div> */}
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Dưa hấu là một trong những loại trái cây yêu thích của nhiều người vào
          mỗi dịp hè nóng bức. Loại quả này không chỉ có vị ngọt thanh mát mà
          còn mang lại nhiều lợi ích nhất định cho sức khỏe bởi chúng chứa nhiều
          thành phần dinh dưỡng thiết yếu, như vitamin, khoáng chất và các hợp
          chất thực vật.
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          {' '}
          <span>Category:</span>Fruit
        </p>
        <p className="productdisplay-right-category">
          {' '}
          <span>Tags:</span>Fruit
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
