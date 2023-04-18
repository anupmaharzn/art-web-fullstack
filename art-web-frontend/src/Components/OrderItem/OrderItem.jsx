import React from "react";
import "./OrderItem.scss";

const OrderItem = ({ item }) => {
  return (
    <div className="orderitem">
      <p className="orderitem-orderid">OrderId: {item.order_id}</p>
      <p className="orderitem-productid">ProductId: {item.product_id}</p>
      <p className="orderitem-name">{item.name}</p>
      <p className="orderitem-quantity">X {item.quantity}</p>
      <p className="orderitem-price">रू{item.price}</p>
    </div>
  );
};

export default OrderItem;
