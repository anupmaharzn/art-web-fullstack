import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Line } from "react-chartjs-2";
import { Chart, CategoryScale, registerables } from "chart.js";
import Sidebar from "../Sidebar/Sidebar";
import "./dashboard.scss";
import { getAdminProduct } from "../redux/actions/productAction";
import { getAllOrders } from "../redux/actions/orderAction";
import { getAllCustomers } from "../redux/actions/customerAction";
import * as RouteList from "../../routes";
import { Link } from "react-router-dom";
Chart.register(CategoryScale, ...registerables);
const Dashboard = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.adminProducts);
  const { orders } = useSelector((state) => state.allOrders);
  const { customers } = useSelector((state) => state.allCustomer);
  console.log("dashboard product", products?.productCount);
  let totalAmount = 0;

  orders?.data &&
    orders.data.forEach((item) => {
      totalAmount += item.totalprice;
    });
  // console.log(totalAmount);
  // console.log(products?.data?.length);
  // console.log(orders?.data?.length);
  // console.log(customers?.data?.length);

  const lineState = {
    labels: ["Inital Amount", "Order Amount"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "#742774",
        hoverBackgroundColor: ["rgb(197,72,49)"],
        data: [0, totalAmount],
      },
    ],
  };

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllCustomers());
  }, [dispatch]);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard__container">
        <div className="dashboard__cards">
          <Link
            to={RouteList.ADMIN_PRODUCT_PAGE}
            className="dashboard__card one"
          >
            <span className="dashboard__card-title">Products</span>
            <span className="dashboard__card-text">
              <p>{products?.productCount}</p>
            </span>
          </Link>

          <Link to={RouteList.ADMIN_ORDER_PAGE} className="dashboard__card two">
            <span className="dashboard__card-title">Orders</span>
            <span className="dashboard__card-text">
              <p>{orders?.data?.length}</p>
            </span>
          </Link>

          <Link
            to={RouteList.ADMIN_CUSTOMER_PAGE}
            className="dashboard__card three"
          >
            <span className="dashboard__card-title">Customers</span>
            <span className="dashboard__card-text">
              <p>{customers?.data?.length}</p>
            </span>
          </Link>

          <div className="dashboard__card four">
            <span className="dashboard__card-title">Total Amount</span>
            <span className="dashboard__card-amount">
              <p>Rs.{totalAmount}</p>
            </span>
          </div>
        </div>
        <div className="dashboard__charts">
          <div className="lineChart">
            <Line
              data={lineState}
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: "Amount - Line chart",
                  },
                  legend: {
                    display: true,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
