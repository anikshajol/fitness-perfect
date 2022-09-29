import React from "react";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div>
      <section className="side-bar ml-1">
        <div className="user-profile">
          <div className="display-image">
            <img src={require("../../display-image.png")} alt="" />
          </div>
          <div className="user-name">
            <p>Md Anik Hasan</p>
            <small className="text-gray-400">Dhaka,bangladesh</small>
          </div>
        </div>
      </section>

      <section className="user-info grid grid-cols-3">
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
    </div>
  );
};

export default SideBar;
