import React from "react";
import Close from "../../assets/image/close.svg";
import "./cartTile.scss";
import { Link } from "react-router-dom";
import { API } from "../../config";
const CartTile = ({ item, handelDeleteCart }) => {
  return (
    <div className="cartTile">
      <div className="cartTile-iconContainer">
        <img
          className="cartTile-icon"
          onClick={(e) => {
            e.stopPropagation();
            handelDeleteCart(item.product_id);
          }}
          src={Close}
          alt="delete"
        />
      </div>
      <Link to={`/product/${item.product_id}`} className="cartTile-imgDiv">
        <img src={`${API}/${item?.image}`} alt="product" />
      </Link>
      <Link to={`/product/${item.product_id}`} className="cartTile-name">
        {item.name}
      </Link>
      <p className="cartTile-price">रू{item.price}</p>
      <p className="cartTile-quantity">X {item.quantity}</p>
      <p className="cartTile-total">{`रू${item.price * item.quantity}`}</p>
    </div>
  );
};

export default CartTile;
