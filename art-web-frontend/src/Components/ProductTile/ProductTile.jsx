import React from "react";
import "./producttile.scss";
import EditIcon from "../../assets/image/edit.svg";
import DeleteIcon from "../../assets/image/delete.svg";
import { Link } from "react-router-dom";
import { API } from "../../config";
const ProductTile = ({ id, name, img, qty, price, handleDelete }) => {
  return (
    <div className="productTile">
      <span className="productTile__id">{id}</span>
      <div className="productTile__art">
        <div className="productTile__img">
          <img src={`${API}/${img}`} alt="product-img" />
        </div>
        <span className="productTile__name">{name}</span>
      </div>
      <span className="productTile__qty">{qty}</span>
      <span className="productTile__price">Rs{price}</span>
      <div className="productTile__icon1">
        <Link to={`/admin/products/${id}`}>
          <img src={EditIcon} alt="edit" />
        </Link>
      </div>

      <div onClick={() => handleDelete(id)} className="productTile__icon2">
        <img src={DeleteIcon} alt="delete" />
      </div>
    </div>
  );
};

export default ProductTile;
