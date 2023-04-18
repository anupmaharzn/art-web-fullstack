import React from "react";
import "./customerTile.scss";
import DeleteIcon from "../../assets/image/delete.svg";

const CustomerTile = ({ id, name, email, address, handleDelete }) => {
  return (
    <div className="CustomerTile">
      <span className="CustomerTile__id">{id}</span>
      <span className="CustomerTile__name">{name}</span>
      <span className="CustomerTile__email">{email}</span>
      <span className="CustomerTile__address">{address}</span>
      <div onClick={() => handleDelete(id)} className="CustomerTile__icon2">
        <img src={DeleteIcon} alt="delete" />
      </div>
    </div>
  );
};

export default CustomerTile;
