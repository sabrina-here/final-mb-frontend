import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import SideNav from "../../components/SideNav";
import WishCards from "../../components/WishCards";

function WishList() {
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/fishCards")
      .then((res) => res.json())
      .then((data) => setWishlist(data.slice(0, 3)))
      .catch((e) => console.log(e));
  }, []);
  console.log(wishlist);
  return (
    <Row>
      <Col>
        <SideNav></SideNav>
      </Col>
      <Col lg={8} md={12}>
        <h3 className="text-center text-primary mt-3">
          Wish List Items:{wishlist.length}
        </h3>
        <div className="my-4 w-100">
          <WishCards fishData={wishlist}></WishCards>
        </div>
      </Col>
    </Row>
  );
}

export default WishList;
