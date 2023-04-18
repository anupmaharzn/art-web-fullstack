import React, { useEffect, useState } from "react";
import "./product.scss";
import Sidebar from "../Sidebar/Sidebar";
import ProductTile from "../../Components/ProductTile/ProductTile";
import { useDispatch, useSelector } from "react-redux";
import { getAdminProduct } from "../redux/actions/productAction";
import { deleteProduct } from "../redux/actions/productAction";
import { useNavigate } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import Pagination from "react-js-pagination";
const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, products } = useSelector((state) => state.adminProducts);
  const [currentPage, setCurrentPage] = useState(1);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  const { product: deletedProduct } = useSelector(
    (state) => state.deleteProduct
  );
  console.log("deleteProduct", deletedProduct);
  useEffect(() => {
    dispatch(getAdminProduct(currentPage));
  }, [dispatch, currentPage]);
  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete")) {
      dispatch(deleteProduct(id));
      navigate(0);
    }
  };
  return (
    <div>
      <Sidebar />
      <div className="product">
        <div className="product__container container">
          <div className="product__header">
            <p>Product ID</p>
            <p>Art</p>
            <p>Quantity</p>
            <p>Price</p>
            <p>Edit</p>
            <p>Delete</p>
          </div>
          <div>
            {products?.data?.length === 0 && (
              <p style={{ textAlign: "center" }}>No Products</p>
            )}
            {loading ? (
              <Loader />
            ) : (
              products?.data &&
              products.data.map((item) => {
                return (
                  <ProductTile
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    qty={item.quantity}
                    img={item.image}
                    price={item.price}
                    handleDelete={handleDelete}
                  />
                );
              })
            )}
          </div>
          {products?.resultPerPage < products?.productCount && (
            <div className="paginationbox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={products?.resultPerPage}
                totalItemsCount={products?.productCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="First"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
