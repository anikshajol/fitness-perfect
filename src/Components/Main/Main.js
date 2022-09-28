import React from "react";
import Products from "../Products/Products";

const Main = () => {
  return (
    <div>
      <section className="card-container mt-20 container mx-auto">
        <Products></Products>
      </section>

      <section className="side-bar"></section>
    </div>
  );
};

export default Main;
