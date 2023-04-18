import React from "react";
import "./ordertile.scss";
import EditIcon from "../../assets/image/edit.svg";
import DeleteIcon from "../../assets/image/delete.svg";
import { Link } from "react-router-dom";
const OrderTile = ({
  id,
  customerid,
  totalprice,
  orderstatus,
  handleDelete,
}) => {
  return (
    <div className="OrderTile">
      <span className="OrderTile__id">{id}</span>
      <span className="OrderTile__customer">{customerid}</span>
      <span className="OrderTile__price">{totalprice}</span>
      <span className="OrderTile__status">{orderstatus}</span>
      <div className="OrderTile__icon1">
        <Link to={`/admin/order/${id}`}>
          <img src={EditIcon} alt="edit" />
        </Link>
      </div>

      <div onClick={() => handleDelete(id)} className="OrderTile__icon2">
        <img src={DeleteIcon} alt="delete" />
      </div>
    </div>
  );
};

export default OrderTile;
