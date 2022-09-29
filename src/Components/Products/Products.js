import React from "react";
import "./Products.css";

const Products = ({ product }) => {
  console.log(product);
  return (
    <section className="product-card-container grid grid-cols-3 gap-32 mt-20 ">
      <div className="card card-compact w-72 bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
