import React from "react";
import "./Header.css";
import logo from "../../logo.png";

const Header = () => {
  return (
    <div className="header">
      <section className="logo">
        <img className="inline" src={logo} alt="" />
        <h2 className="text-3xl font-bold">Fitness Perfect</h2>
      </section>
    </div>
  );
};

export default Header;
