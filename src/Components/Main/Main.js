import React, { useEffect, useState } from "react";
import "./Main.css";
import Products from "../Products/Products";
import SideBar from "../Sidebar/SideBar";

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="main-container container mx-auto">
      <section className="card-container  grid grid-cols-3  ">
        {products.map((product) => (
          <Products key={product._id} product={product}></Products>
        ))}
      </section>

      <section className="side-bar h-full bg-white-500">
        <SideBar></SideBar>
      </section>
    </div>
  );
};

export default Main;
