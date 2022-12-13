import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import SideNav from "../../components/SideNav";
import WishCards from "../../components/WishCards";

function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/fishCards")
      .then((res) => res.json())
      .then((data) => setOrders(data.slice(0, 3)));
  }, []);
  return (
    <Row>
      <Col>
        <SideNav></SideNav>
      </Col>
      <Col lg={8} md={12} className="text-center">
        {/* ---------------------- completed orders list------------------- */}
        <div>
          <h4 className="my-4">
            Your Order ID: 3422534{"   "}
            <p className="text-primary d-inline ms-2"> {orders.length} items</p>
          </h4>
          <h4>
            status: <p className="text-success d-inline">Completed</p>
          </h4>
          <div>
            <WishCards fishData={orders}></WishCards>
          </div>
        </div>
        {/* ------------------------pending orders list---------------------- */}
        <div>
          <h4 className="my-4">
            Your Order ID: 3422534{"   "}
            <p className="text-primary d-inline ms-2"> {orders.length} items</p>
          </h4>
          <h4>
            status: <p className="text-danger d-inline">Pending</p>
          </h4>
          <div>
            <WishCards fishData={orders}></WishCards>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Orders;
