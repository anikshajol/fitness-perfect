import React from "react";
import "./SideBar.css";

const SideBar = ({ second }) => {
  console.log(second);

  let total = 0;
  for (const time of second) {
    total = total + time.time;
    console.log(total);
  }

  return (
    <div className="side-bar-container">
      <section className="mt-12 ml-4 text-3xl ">
        <h2>Exercise Details</h2>
        <div>
          <section className="user-info flex justify-around gap-4">
            <div className="exercise-time">
              <h2>Exercise time</h2>
            </div>
            <div className="time">
              <p>
                {total}
                <span>seconds</span>
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default SideBar;
