import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as routeList from "./routes";
import Home from "./Pages/Home/Home";
import Header from "./Layouts/Header/Header";
import Footer from "./Layouts/Footer/Footer";
// import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import React, { Suspense } from "react";
import Loader from "./Components/Loader/Loader";
import Cart from "./Pages/Cart/Cart";
import About from "./Pages/About/About";
import Shipping from "./Pages/Shipping/Shipping";
import OrderSummary from "./Pages/OrderSummary/OrderSummary";
import Login from "./Pages/Login/Login";
import Dashboard from "./Admin/Dashboard/Dashboard";
import ProtectedRoute from "./Routes/ProtectedRoute";
import Product from "./Admin/Product/Product";
import NewProduct from "./Admin/NewProduct/NewProduct";
import EditProduct from "./Admin/EditProduct/EditProduct";
import Orders from "./Admin/Orders/Orders";
import EditOrder from "./Admin/EditOrder/EditOrder";
import Customer from "./Admin/Customer/Customer";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Category from "./Admin/Category/Category";
import EditCategory from "./Admin/EditCategory/EditCategory";
const ProductDetails = React.lazy(() =>
  import("./Pages/ProductDetails/ProductDetails")
);
import "./app.scss";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path={routeList.HOME_PAGE} element={<Home />} />
          <Route
            path={routeList.DETAILS_PAGE}
            element={
              <Suspense fallback={<Loader />}>
                <ProductDetails />
              </Suspense>
            }
          />
          <Route path={routeList.CART} element={<Cart />} />
          <Route path={routeList.ABOUT_ME} element={<About />} />
          <Route path={routeList.SHIPPING} element={<Shipping />} />
          <Route path={routeList.ORDER_SUMMARY} element={<OrderSummary />} />
          <Route path={routeList.LOGIN_PAGE} element={<Login />} />
          <Route
            path={routeList.FOGORT_PASSWORD_PAGE}
            element={<ForgotPassword />}
          />
          <Route
            path={routeList.RESET_PASSWORD_PAGE}
            element={<ResetPassword />}
          />

          <Route
            path={routeList.DASHBOARD_PAGE}
            element={
              <ProtectedRoute isAdmin={true}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path={routeList.ADMIN_PRODUCT_PAGE}
            element={
              <ProtectedRoute isAdmin={true}>
                <Product />
              </ProtectedRoute>
            }
          />
          <Route
            path={routeList.ADMIN_CREATE_PRODUCT}
            element={
              <ProtectedRoute isAdmin={true}>
                <NewProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path={routeList.ADMIN_EDIT_PRODUCT}
            element={
              <ProtectedRoute isAdmin={true}>
                <EditProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path={routeList.ADMIN_ORDER_PAGE}
            element={
              <ProtectedRoute isAdmin={true}>
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route
            path={routeList.ADMIN_EDIT_ORDER}
            element={
              <ProtectedRoute isAdmin={true}>
                <EditOrder />
              </ProtectedRoute>
            }
          />
          <Route
            path={routeList.ADMIN_CUSTOMER_PAGE}
            element={
              <ProtectedRoute isAdmin={true}>
                <Customer />
              </ProtectedRoute>
            }
          />
          <Route
            path={routeList.ADMIN_CATEGORY_PAGE}
            element={
              <ProtectedRoute isAdmin={true}>
                <Category />
              </ProtectedRoute>
            }
          />
          <Route
            path={routeList.EDIT_CATEGORY_PAGE}
            element={
              <ProtectedRoute isAdmin={true}>
                <EditCategory />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
