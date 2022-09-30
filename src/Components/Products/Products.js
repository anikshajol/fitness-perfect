import React from "react";
import "./Products.css";

const Products = ({ product, handleAdd }) => {
  const { age, name, picture, time, toAge } = product;

  // const [cart, setCart] = useState([]);

  return (
    <section className="product-card-container grid grid-cols-3 gap-32 mt-20 ">
      <div className="card card-compact w-72 bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            For Age: {age}-{toAge}
          </p>
          <p>
            Time required: {time}
            <span>s</span>
          </p>
          <div className="card-actions justify-end">
            <button onClick={() => handleAdd(time)} className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
