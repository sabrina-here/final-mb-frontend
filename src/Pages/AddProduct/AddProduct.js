import React from "react";
import { Col, Row } from "react-bootstrap";
import AddItem from "../../components/AddItem";
import SideNav from "../../components/SideNav";

function AddProduct() {
  return (
    <Row>
      <Col>
        <SideNav></SideNav>
      </Col>
      <Col lg={6} md={12}>
        <AddItem></AddItem>
      </Col>
      <Col></Col>
    </Row>
  );
}

export default AddProduct;
