import React from "react";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="side-bar-container">
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
          <section className="user-info grid grid-cols-3 gap-4">
            <div className="age">
              <h2 className="second">
                29<span>s</span>
              </h2>
            </div>

            <div className="weight">
              <h2 className="second">
                75<span>s</span>
              </h2>
            </div>
            <div className="height">
              <h2 className="second">
                30<span>s</span>
              </h2>
            </div>
          </section>
        </div>
      </section>

      <section className="mt-12 ml-4 text-3xl ">
        <h2>Exercise Details</h2>
        <div>
          <section className="user-info flex justify-around gap-4">
            <div className="exercise-time">
              <h2>Exercise time</h2>
            </div>
            <div className="time">
              <p>300</p>
            </div>
          </section>

          <section className="user-info flex justify-around gap-4">
            <div className="exercise-time">
              <h2>Break time</h2>
            </div>
            <div className="time">
              <p>15</p>
            </div>
          </section>
        </div>
      </section>

      <div className=" flex justify-center mt-12">
        <button className="btn btn-active btn-primary w-2/4">
          Completed Activity
        </button>
      </div>
    </div>
  );
};

export default SideBar;
