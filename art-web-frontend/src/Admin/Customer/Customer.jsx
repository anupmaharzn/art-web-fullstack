import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { getAllCustomers } from "../redux/actions/customerAction";
import { useDispatch, useSelector } from "react-redux";
import CustomerTile from "../../Components/CustomerTile/CustomerTile";
import { deleteCustomer } from "../redux/actions/customerAction";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../Components/Loader/Loader";
import "./customer.scss";
import { useNavigate } from "react-router-dom";
const Customer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, customers } = useSelector((state) => state.allCustomer);
  const { customer } = useSelector((state) => state.deleteCustomer);
  console.log(customers.data);
  console.log("deleted customer", customer);
  useEffect(() => {
    dispatch(getAllCustomers());
  }, [dispatch]);

  const handleDelete = (id) => {
    console.log("delete clicked");
    if (window.confirm("Do you want to delete")) {
      dispatch(deleteCustomer(id));
      if (customer) {
        toast("Order Deleted sucessfully");
        navigate(0);
      }
    }
  };
  return (
    <div>
      <ToastContainer position="bottom-center" autoClose={1000} theme="dark" />
      <Sidebar />
      <div className="customer">
        <div className="customer__container container">
          <div className="customer__header">
            <p>Customer ID</p>
            <p>Name</p>
            <p>Email</p>
            <p>address</p>
            <p>Delete</p>
          </div>
          <div>
            {customers?.data?.length === 0 && (
              <p style={{ textAlign: "center" }}>No customers yet</p>
            )}
            {loading ? (
              <Loader />
            ) : (
              customers?.data &&
              customers.data.map((item) => {
                return (
                  <CustomerTile
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    email={item.email}
                    address={item.address}
                    handleDelete={handleDelete}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Customer;
