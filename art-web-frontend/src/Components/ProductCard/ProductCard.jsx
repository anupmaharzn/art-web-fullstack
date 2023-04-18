import React from "react";
import { Link } from "react-router-dom";
import "./productCard.scss";
import { API } from "../../config";
const ProductCard = ({ product }) => {
  return (
    <Link to={`product/${product.id}`} className="productCard">
      <div className="productCard-imgDiv">
        <img src={`${API}/${product?.image}`} alt="product-img" />
      </div>

      <div className="productCard-content">
        <h1 className="productCard-title">{product.name}</h1>
        <p className="productCard-theme">{product.theme}</p>
        <span className="productCard-price">रू{product.price}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
