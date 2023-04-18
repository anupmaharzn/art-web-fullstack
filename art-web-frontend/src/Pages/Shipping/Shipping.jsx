import React from "react";
import { useForm } from "react-hook-form";
import "./shipping.scss";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingInfo, createOrder, clearErrors } from "./actions";
import Button from "../../Components/Button/Button";
import { ToastContainer, toast } from "react-toastify";
import { shippingFormConfig } from "./shippingFormConfig";
import Input from "../../Components/Input/Input";
import { useNavigate } from "react-router-dom";
import { resetCartItem } from "../Cart/actions";
//lets say
const shippingCost = 125;
const Shipping = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const { error } = useSelector((state) => state.newOrder);
  const { shippingInfo } = useSelector((state) => state.shipping);

  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const total = subTotal + shippingCost;
  //react hook form

  const handleShipping = (data) => {
    dispatch(saveShippingInfo(data));

    const customer_info = {
      name: data.name,
      email: data.email,
      address: data.address,
      contact_no: data.contact,
      city: data.city,
      country: "Nepal",
      postal_code: data.postalcode,
    };
    const cart = cartItems.map((item) => ({
      product_id: item.product_id,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    }));

    //order data
    const orderData = {
      customer: customer_info,
      order_items: cart,
    };

    //place order
    dispatch(createOrder(orderData));
    //if error
    if (error) {
      toast(error);
      //then clear error
      dispatch(clearErrors());
    }
    //if no error then
    if (!error) {
      toast("Your order is placed");
      setTimeout(() => {
        navigate("/order-summary");
      }, 2000);
      dispatch(resetCartItem());
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: shippingInfo.name,
      email: shippingInfo.email,
      address: shippingInfo.address,
      contact: shippingInfo.contact,
      city: shippingInfo.city,
      country: "Nepal",
      postalcode: shippingInfo.postalcode,
    },
  });

  return (
    <>
      <ToastContainer position="bottom-center" autoClose={1000} theme="dark" />
      <div className="container shipping-container">
        <form onSubmit={handleSubmit(handleShipping)}>
          <h1 className="title">Shipping Address</h1>
          <div className="form-container">
            <div className="form-fields">
              {/* Full name */}
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  register={register("name", shippingFormConfig.name)}
                />
                {errors?.name && <p>{errors.name.message}</p>}
              </div>
              {/* Email */}
              <div className="form-field">
                <label htmlFor="email">Your email</label>
                <Input
                  type="email"
                  placeholder="Gurzu@gmail.com"
                  name="email"
                  register={register("email", shippingFormConfig.email)}
                />
                {errors?.email && <p>{errors.email.message}</p>}
              </div>
            </div>
            {/* Address */}
            <div className="form-field">
              <label htmlFor="address">Your Address</label>
              <Input
                type="text"
                placeholder="Your Address"
                name="address"
                register={register("address", shippingFormConfig.address)}
              />
              {errors?.address && <p>{errors.address.message}</p>}
            </div>

            <div className="form-fields">
              {/* Contact no */}
              <div className="form-field">
                <label htmlFor="contact">Your Phone Number</label>
                <Input
                  type="number"
                  placeholder="Your Number"
                  maxLength={10}
                  name="contact"
                  register={register("contact", shippingFormConfig.contact)}
                />
                {errors?.contact && <p>{errors.contact.message}</p>}
              </div>
              {/* city */}
              <div className="form-field">
                <label htmlFor="city">City</label>
                <Input
                  type="text"
                  placeholder="Your City"
                  name="city"
                  register={register("city", shippingFormConfig.city)}
                />
                {errors?.city && <p>{errors.city.message}</p>}
              </div>
            </div>
            <div className="form-fields">
              {/* country */}
              <div className="form-field">
                <label htmlFor="country">Country</label>
                <select
                  type="text"
                  placeholder="Your City"
                  name="country"
                  {...register("country", shippingFormConfig.country)}
                >
                  <option value="">Country</option>
                  <option value="Nepal">Nepal</option>
                </select>
                {errors?.country && <p>{errors.country.message}</p>}
              </div>
              {/**postalcode */}
              <div className="form-field">
                <label htmlFor="postalcode">Postal Code</label>
                <Input
                  type="number"
                  placeholder="Postal code"
                  name="postalcode"
                  register={register(
                    "postalcode",
                    shippingFormConfig.postalcode
                  )}
                />
                {errors?.postalcode && <p>{errors.postalcode.message}</p>}
              </div>
            </div>

            <div>
              <Button qty={cartItems?.length} theme="button">
                Place Order
              </Button>
            </div>
          </div>
        </form>

        {/* your  order section  */}
        <div className="order-section">
          <h1 className="title">Your Order</h1>
          <div className="headings">
            <span>Product</span>
            <span>Total</span>
          </div>
          {cartItems?.length > 0 &&
            cartItems.map((item) => {
              return (
                <div key={item.name} className="orderlist">
                  <div>
                    <span className="orderlist-name">{item.name}</span>
                    <span className="orderlist-quantity">
                      {" "}
                      x {item.quantity}
                    </span>
                  </div>
                  <span className="orderlist-price">{`रू ${
                    item.price * item.quantity
                  }`}</span>
                </div>
              );
            })}
          <div>
            <div className="subtotal">
              <p>Subtotal</p>
              <span> रू {subTotal}</span>
            </div>
            <div className="shipping">
              <p>Shipping</p>
              <span>Flat Rate: रू {shippingCost}</span>
            </div>
            <span className="total">रू {total}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shipping;
