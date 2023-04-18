import React, { useState } from "react";
import { Link } from "react-router-dom";
import AllIcon from "../../assets/image/all.svg";
import AddIcon from "../../assets/image/add.svg";
import DashboardIcon from "../../assets/image/dashboard.svg";
import OrderIcon from "../../assets/image/order.svg";
import ProductIcon from "../../assets/image/product.svg";
import CustomerIcon from "../../assets/image/customer.svg";
import DownIcon from "../../assets/image/arrowdown.svg";
import UpIcon from "../../assets/image/arrowup.svg";
import CategoryIcon from "../../assets/image/category.svg";
import * as RouteList from "../../routes";
import "./sidebar.scss";
import * as Routlist from "../../routes";
const Sidebar = () => {
  const [dropDown, setDropDown] = useState(false);
  const handleDropdown = () => {
    setDropDown(!dropDown);
  };
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <div>
          <Link className="sidebar__links" to={Routlist.DASHBOARD_PAGE}>
            {" "}
            <img src={DashboardIcon} alt="dashboard" /> Dashboard
          </Link>
        </div>
        <div>
          <Link to={RouteList.ADMIN_CATEGORY_PAGE} className="sidebar__links">
            <img src={CategoryIcon} alt="order" />
            Categories
          </Link>
        </div>
        <div>
          <button onClick={handleDropdown} className="side-btn sidebar__links">
            <img src={ProductIcon} alt="product" />
            Products
            <span className="">
              {dropDown ? (
                <img src={UpIcon} alt="up" />
              ) : (
                <img src={DownIcon} alt="down" />
              )}
            </span>
          </button>
          <div
            className={
              dropDown ? `sidebar__dropdown show-dropdown` : `sidebar__dropdown`
            }
          >
            <Link to={RouteList.ADMIN_PRODUCT_PAGE} className="sidebar__links">
              <img src={AllIcon} alt="all" />
              All
            </Link>
            <Link
              to={RouteList.ADMIN_CREATE_PRODUCT}
              className="sidebar__links"
            >
              <img src={AddIcon} alt="add" />
              create
            </Link>
          </div>
        </div>
        <div>
          <Link to={RouteList.ADMIN_ORDER_PAGE} className="sidebar__links">
            <img src={OrderIcon} alt="order" />
            Orders
          </Link>
        </div>
        <div>
          <Link to={RouteList.ADMIN_CUSTOMER_PAGE} className="sidebar__links">
            <img src={CustomerIcon} alt="customer" />
            Customers
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
