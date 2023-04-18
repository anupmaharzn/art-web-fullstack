import React, { useEffect, useState } from "react";
import "./home.scss";
//import Button from "../../Components/Button/Button";
import banner1 from "../../assets/image/banner.jpg";
import banner2 from "../../assets/image/banner2.jpg";
import Carousel from "../../Components/Carousel/Carousel";
import Loader from "../../Components/Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, clearErrors } from "./actions";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Pagination from "react-js-pagination";
import SearchIcon from "../../assets/image/search.svg";
//carousel dummy data
const artSlider = [
  {
    title: "Highlights from Mexico City",
    description:
      "All eyes are on CDMX this week as the city’s major art fairs take center stage.",
    image: banner1,
    id: "1",
  },
  {
    title: "Celebrate Black Art",
    description: "Discover 28 artists whose work deserves a closer look.",
    image: banner2,
    id: "2",
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    dispatch(getProducts(currentPage));
  }, [dispatch, error, currentPage]);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getProducts(currentPage, search));
    setSearch("");
  };
  return (
    <>
      <div>
        <Carousel product={artSlider} />
      </div>
      {loading ? (
        <Loader />
      ) : (
        <section id="arkworks" className="product-section">
          <div className="product-section__top container">
            <div>
              <h1 className="product-section__title">ARTWORKS</h1>
            </div>
            <form onSubmit={handleSearch} className="product-section__search">
              <input
                className="product-section__field"
                type="text"
                placeholder="Search by name,description"
                onChange={(e) => setSearch(e.target.value)}
              ></input>

              <button type="submit" className="product-section__btn">
                <img src={SearchIcon} alt="searchicon"></img>
              </button>
            </form>
          </div>
          <div className="container">
            <div className="product-container">
              {products?.data?.length > 0 &&
                products?.data.map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })}
            </div>
            {!products?.data?.length && (
              <p className="product-container__msg">Search not found!</p>
            )}
          </div>
        </section>
      )}
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
    </>
  );
};

export default Home;
