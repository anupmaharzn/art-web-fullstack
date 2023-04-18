import React from "react";
import "./categorytile.scss";
import EditIcon from "../../assets/image/edit.svg";
import DeleteIcon from "../../assets/image/delete.svg";
import { Link } from "react-router-dom";
const CategoryTile = ({ id, name, handleDelete }) => {
  return (
    <div className="categoryTile">
      <span className="categoryTile__id">{id}</span>
      <span className="categoryTile__name">{name}</span>
      <div className="categoryTile__icon1">
        <Link to={`/admin/category/${id}`}>
          <img src={EditIcon} alt="edit" />
        </Link>
      </div>
      <div onClick={() => handleDelete(id)} className="categoryTile__icon2">
        <img src={DeleteIcon} alt="delete" />
      </div>
    </div>
  );
};

export default CategoryTile;
