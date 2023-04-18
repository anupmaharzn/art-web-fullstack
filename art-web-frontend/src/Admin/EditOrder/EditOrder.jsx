import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import "./editorder.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOrderDetail, editOrder } from "../redux/actions/orderAction";
import OrderItem from "../../Components/OrderItem/OrderItem";
import Loader from "../../Components/Loader/Loader";
import Button from "../../Components/Button/Button";
import { toast } from "react-toastify";
const EditOrder = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, order } = useSelector((state) => state.orderDetail);
  const { order: editedOrder } = useSelector((state) => state.editOrder);
  console.log(order?.data);
  console.log(editedOrder);
  const orderdata = order?.data;
  const customer = order?.data?.customer_info;

  console.log("database date", orderdata?.order_date);
  const today = new Date(orderdata?.order_date);
  const date = today.toDateString();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleOrder = (data) => {
    const orderdata = {
      order_status: data.orderstatus,
    };
    dispatch(editOrder(id, orderdata));

    toast("Order Status Edited Sucessfully");

    navigate(0);
  };
  useEffect(() => {
    dispatch(getOrderDetail(id));
  }, [dispatch, id]);
  return (
    <div>
      <Sidebar />
      <div className="editorder">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="editorder__container container">
              <div className="editorder__grid">
                <div className="editorder__customersection">
                  <h1 className="editorder__title">Customer-Shipping Info</h1>
                  <div className="editorder__desc">
                    <span className="editorder__desc__list">
                      <span>Customer ID: </span>#{customer?.id}
                    </span>
                    <span className="editorder__desc__list">
                      <span>Customer Name:</span> {customer?.name}
                    </span>

                    <span className="editorder__desc__list">
                      <span>Email: </span>
                      {customer?.email}
                    </span>
                    <span className="editorder__desc__list">
                      <span>Contact Number: </span>
                      {customer?.contact_no}
                    </span>
                    <span className="editorder__desc__list">
                      <span>Country: </span>
                      {customer?.country}
                    </span>
                    <span className="editorder__desc__list">
                      <span>Address: </span>
                      {customer?.address}
                    </span>
                    <span className="editorder__desc__list">
                      <span>City: </span>
                      {customer?.city}
                    </span>
                    <span className="editorder__desc__list">
                      <span>Postal Code: </span>
                      {customer?.postal_code}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="editorder__ordersection">
                    <h1 className="editorder__title">Order Info</h1>
                    <div className="editorder__desc">
                      <span className="editorder__desc__list">
                        <span>Total Price:</span> Rs {orderdata?.totalprice}
                      </span>
                      <span className="editorder__desc__list">
                        <span>Order Status:</span> {orderdata?.order_status}
                      </span>
                      <span className="editorder__desc__list">
                        <span>Order Date:</span> {date}
                      </span>
                    </div>
                  </div>
                  <div className="editorder__ordersection">
                    <h1 className="editorder__title">Order Items</h1>
                    {orderdata?.orderitem.map((item) => {
                      return <OrderItem key={item?.id} item={item} />;
                    })}
                  </div>
                </div>
              </div>
              <div className="editorder__status">
                <form
                  onSubmit={handleSubmit(handleOrder)}
                  className="form-field "
                >
                  <div className="form-field-container">
                    {" "}
                    <label htmlFor="orderstatus">Order Status</label>
                    <select
                      type="text"
                      name="orderstatus"
                      {...register("orderstatus", {
                        required: "* order status Required",
                      })}
                    >
                      <option value="">Change Status</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                    {errors?.orderstatus && <p>{errors.orderstatus.message}</p>}
                  </div>
                  <Button theme="button">Change</Button>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EditOrder;
