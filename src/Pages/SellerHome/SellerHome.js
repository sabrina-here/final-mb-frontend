import React, { useEffect, useState } from "react";
import NewArrival from "../../components/NewArrivalFishes/NewArrival";

function SellerHome() {
  const [yourProducts, setYourProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/fishCards")
      .then((res) => res.json())
      .then((data) => setYourProducts(data.slice(0, 3)));
  }, []);
  return (
    <div>
      <NewArrival fishData={yourProducts} title="Your Products"></NewArrival>
    </div>
  );
}

export default SellerHome;
