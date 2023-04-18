import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { productReducer } from "./Pages/Home/reducers";
import { productDetailReducer } from "./Pages/ProductDetails/reducers";
import { cartReducer } from "./Pages/Cart/reducers";
import {
  shippingInfoReducer,
  neworderReducer,
} from "./Pages/Shipping/reducers";
import { loginUserReducer } from "./Pages/Login/reducer";
import {
  adminProductReducer,
  createProductReducer,
  adminproductDetailReducer,
  editproductReducer,
  deleteproductReducer,
} from "./Admin/redux/reducers/productReducer";
import {
  allOrderReducer,
  orderDetailReducer,
  editorderReducer,
  deleteorderReducer,
} from "./Admin/redux/reducers/orderReducer";
import {
  allCustomerReducer,
  deleteCustomerReducer,
} from "./Admin/redux/reducers/customerReducer";
import {
  allCategoryReducer,
  createCategoryReducer,
  detailcategoryReducer,
  editcateoryReducer,
  deletecategoryReducer,
} from "./Admin/redux/reducers/categoryReducer";
import { forgotPasswordReducer } from "./Pages/ForgotPassword/reducer";
import { resetPasswordReducer } from "./Pages/ResetPassword/reducer";
const reducers = combineReducers({
  products: productReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  shipping: shippingInfoReducer,
  newOrder: neworderReducer,
  user: loginUserReducer,
  adminProducts: adminProductReducer,
  allOrders: allOrderReducer,
  allCustomer: allCustomerReducer,
  allCategory: allCategoryReducer,
  createProduct: createProductReducer,
  adminproductDetail: adminproductDetailReducer,
  editproductDetail: editproductReducer,
  deleteProduct: deleteproductReducer,
  orderDetail: orderDetailReducer,
  editOrder: editorderReducer,
  deleteOrder: deleteorderReducer,
  deleteCustomer: deleteCustomerReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  createCategory: createCategoryReducer,
  detailCategory: detailcategoryReducer,
  editCategory: editcateoryReducer,
  deletecategoryReducer: deletecategoryReducer,
});

//preload states as per docs
let initalState = {
  cart: {
    //if localstorage has data
    //parse that data into json and store it in cartItems
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
  shipping: {
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
  user: {
    userInfo: sessionStorage.getItem("userInfo")
      ? JSON.parse(sessionStorage.getItem("userInfo"))
      : {},
  },
};

//thunk middleware
const middleware = [thunk];

const store = createStore(
  reducers,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
