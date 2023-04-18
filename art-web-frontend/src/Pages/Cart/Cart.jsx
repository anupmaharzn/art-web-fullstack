import React from "react";
import "./cart.scss";
import { useSelector, useDispatch } from "react-redux";
import { removeCartItem } from "./actions";
//import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import { HOME_PAGE } from "../../routes";
import CartTile from "../../Components/CartTile/CartTile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  console.log("cartitems", cartItems);

  const handelCartDelete = (id) => {
    dispatch(removeCartItem(id));
    toast("REMOVED FROM CART");
  };
  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  //lets say
  const shippingCost = 125;
  const total = subTotal + shippingCost;
  //handle checkout
  const handleCheckout = () => {
    console.log("checking out");
    navigate("/shipping");
  };
  return (
    <>
      <ToastContainer position="bottom-center" autoClose={1000} theme="dark" />
      <div className="container">
        {cartItems?.length === 0 ? (
          <div className="cart-empty">
            <span>Your cart is currently empty.</span>
            <Link className="button" to={HOME_PAGE}>
              RETURN TO SHOP
            </Link>
          </div>
        ) : (
          <>
            <div className="cartContainer">
              <div className="cartContainer-header">
                <h1>Product</h1>
                <h1>Price</h1>
                <h1>Quantity</h1>
                <h1>Total</h1>
              </div>
              {cartItems.map((item) => (
                <div key={item.product_id} className="cartContainer-content">
                  <CartTile item={item} handelDeleteCart={handelCartDelete} />
                </div>
              ))}
            </div>
            {/* button section */}
            <div className="button-section">
              <Link className="button " to={HOME_PAGE}>
                UPDATE CART
              </Link>
              <button className="button second" onClick={handleCheckout}>
                PROCEED TO CHECKOUT
              </button>
            </div>

            {/* total section */}
            <div className="cartTotal">
              <h1 className="cartTotal-heading">CART TOTALS</h1>
              <div>
                <div className="cartTotal-content">
                  <p>SUBTOTAL</p>
                  <span> रू{subTotal}</span>
                </div>
                <div className="cartTotal-content">
                  <p>SHIPPING</p>
                  <span>Flat Rate:रू{shippingCost}</span>
                </div>
                <div className="cartTotal-content">
                  <p>TOTAL</p>
                  <span>रू{total}</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
