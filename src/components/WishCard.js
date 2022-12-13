import React from "react";
import { Link } from "react-router-dom";

function WishCard({ fish }) {
  const { name, weight, price, fishImage } = fish;
  return (
    <div>
      <div
        className="card my-2 text-center "
        style={{ width: "200px", height: "300px" }}
      >
        <img
          src={fishImage}
          className="card-img-top img-fluid"
          alt="fish"
          style={{ height: "150px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>
            <small>{weight}</small>
          </p>
          <p className="card-text fw-bold">Tk {price}.00</p>

          <Link
            className="btn btn-light border border-primary"
            to={`/productExtendedView/${fish.id}`}
          >
            {" "}
            View More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WishCard;
