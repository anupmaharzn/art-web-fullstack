import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetail, clearErrors } from "./actions";
import Button from "../../Components/Button/Button";
import "./productDetails.scss";
import Loader from "../../Components/Loader/Loader";
import { addItemsToCart } from "../Cart/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "../../config";
const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, product, error } = useSelector(
    (state) => state.productDetail
  );
  const { cartItems } = useSelector((state) => state.cart);
  const { about_product: about } = product;

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    dispatch(getProductDetail(id));
  }, [dispatch, id, error]);

  const cartbool = cartItems.some((el) => el.product_id == id);

  const addToCartHandler = () => {
    if (cartbool) {
      toast("Existing Cart Item!");
    } else {
      dispatch(addItemsToCart(id));
      toast("ADDED TO CART");
      setTimeout(() => {
        navigate("/cart");
      }, 1000);
    }
  };

  return (
    <>
      <ToastContainer position="bottom-center" autoClose={1000} theme="dark" />
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div className="container">
            <div className="detail">
              <div className="detail-imgDiv">
                <img src={`${API}/${product?.image}`} alt="detail-img"></img>
              </div>
              <div className="detail-content">
                <div className="detail-content-divOne">
                  <h1>{product.name}</h1>
                  <sub>{product.theme}</sub>
                </div>

                <p className="detail-content-desc">{product.description}</p>
                <div className="detail-content-btn">
                  <Button
                    qty={product?.quantity}
                    theme="button button--second"
                    handleClick={addToCartHandler}
                  >
                    {product?.quantity <= 0 ? `Sold Out` : `Make Purchase`}
                  </Button>
                </div>
              </div>
            </div>
            <div className="about">
              <div className="about-title">
                <span className="span1">About the work</span>
              </div>
              <div className="about-content">
                <div className="about-contentDiv">
                  <h1 className="about-name">Materials</h1>
                  <p className="about-value">{about?.material}</p>
                </div>
                <div className="about-contentDiv">
                  <h1 className="about-name">Size</h1>
                  <p className="about-value">{about?.size}</p>
                </div>
                <div className="about-contentDiv">
                  <h1 className="about-name">Rarity</h1>
                  <p className="about-value about-rarity">{about?.rarity}</p>
                </div>
                <div className="about-contentDiv">
                  <h1 className="about-name">Condition</h1>
                  <p className="about-value">{about?.condition}</p>
                </div>
                <div className="about-contentDiv">
                  <h1 className="about-name">Signature</h1>
                  <p className="about-value">{about?.signature}</p>
                </div>{" "}
                <div className="about-contentDiv">
                  <h1 className="about-name">Certificate of authenticity</h1>
                  <p className="about-value">{about?.COA}</p>
                </div>{" "}
                <div className="about-contentDiv">
                  <h1 className="about-name">Frame</h1>
                  <p className="about-value">{about?.frame}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
