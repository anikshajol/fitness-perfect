import React, { useEffect, useState } from "react";
import "./Main.css";
import Products from "../Products/Products";

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="main-container container mx-auto">
      <section className="card-container  grid grid-cols-3 gap-30 ">
        {products.map((product) => (
          <Products key={product._id} product={product}></Products>
        ))}
      </section>

      <section className="side-bar flex">
        <h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          facere ut? Sit porro voluptates quos perferendis nisi suscipit dolor
          numquam, aliquam provident, eaque in sequi ea similique maxime
          dolorem. Commodi.
        </h2>
      </section>
    </div>
  );
};

export default Main;
