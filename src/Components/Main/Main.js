import React, { useEffect, useState } from "react";
import "./Main.css";
import Products from "../Products/Products";
import SideBar from "../Sidebar/SideBar";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [second, setSecond] = useState([]);
  const [time, setTime] = useState("00s");

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAdd = (product) => {
    console.log(product);
    const newSecond = [...second, product];

    setSecond(newSecond);
  };

  const handleBreakTime = (e) => {
    const newTime = e.target.innerText;
    setTime(newTime);
  };

  return (
    <div className="main-container container mx-auto">
      <section className="card-container  grid grid-cols-3  ">
        {products.map((product) => (
          <Products
            key={product._id}
            product={product}
            handleAdd={handleAdd}
          ></Products>
        ))}
      </section>

      <section className="side-bar h-full bg-white-500">
        <section className="ml-1">
          <div className="user-profile">
            <div className="display-image">
              <img src={require("../../display-image.png")} alt="" />
            </div>
            <div className="user-name">
              <p>Md Anik Hasan</p>
              <small className="text-gray-400">Dhaka, bangladesh</small>
            </div>
          </div>
        </section>

        <section className="user-info grid grid-cols-3 gap-4">
          <div className="age">
            <h2>
              29<span className="text-xs text-gray-500">yrs</span>
            </h2>
            <p>Age</p>
          </div>

          <div className="weight">
            <h2>
              75<span className="text-xs text-gray-500">kg</span>
            </h2>
            <p>Weight</p>
          </div>
          <div className="height">
            <h2>5'6</h2>
            <p>Height</p>
          </div>
        </section>

        <section className="mt-12 ml-4 text-3xl ">
          <h2>Add a Break</h2>
          <div>
            <section className="user-info grid grid-cols-4 gap-4">
              <div className="age">
                <h2 onClick={(e) => handleBreakTime(e)} className="second">
                  29s
                </h2>
              </div>

              <div className="weight">
                <h2 onClick={(e) => handleBreakTime(e)} className="second">
                  75s
                </h2>
              </div>
              <div className="height">
                <h2 onClick={(e) => handleBreakTime(e)} className="second">
                  30s
                </h2>
              </div>
              <div className="height">
                <h2 onClick={(e) => handleBreakTime(e)} className="second">
                  25s
                </h2>
              </div>
            </section>
          </div>
        </section>

        <SideBar second={second}></SideBar>

        <section className="user-info flex justify-around gap-4">
          <div className="exercise-time">
            <h2>Break time</h2>
          </div>
          <div className="time">
            <p id="addTime">{time}</p>
          </div>
        </section>

        <div className=" flex justify-center mt-12">
          <button className="btn btn-active btn-primary w-2/4">
            Completed Activity
          </button>
        </div>
      </section>
    </div>
  );
};

export default Main;
