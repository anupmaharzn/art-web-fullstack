import React, { useEffect } from "react";
import OrderTile from "../../Components/OrderTile/OrderTile";
import Sidebar from "../Sidebar/Sidebar";
import { getAllOrders, deleteOrder } from "../redux/actions/orderAction";
import Loader from "../../Components/Loader/Loader";
import "./orders.scss";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, orders } = useSelector((state) => state.allOrders);

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);
  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete")) {
      dispatch(deleteOrder(id));
      toast("Order Deleted sucessfully");
      navigate(0);
    }
  };
  return (
    <div>
      <Sidebar />
      <div className="order">
        <div className="order__container container">
          <div className="order__header">
            <p>Order ID</p>
            <p>Customer ID</p>
            <p>Total Price</p>
            <p>Order Status</p>
            <p>Edit</p>
            <p>Delete</p>
          </div>
          <div>
            {orders?.data?.length === 0 && (
              <p style={{ textAlign: "center" }}>No orders yet</p>
            )}
            {loading ? (
              <Loader />
            ) : (
              orders?.data &&
              orders.data.map((item) => {
                return (
                  <OrderTile
                    key={item.id}
                    id={item.id}
                    customerid={item.customer_info_id}
                    totalprice={item.totalprice}
                    orderstatus={item.order_status}
                    handleDelete={handleDelete}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
