import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./Section.css";
const Section = () => {
  return (
    <div className="section">
      <div>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery </p>
      </div>

      <div className="buttonGroup">
        <button className="leftButton">Customer Order</button>
        <button className="rightButton">Existing Inventory</button>
      </div>
      <div className="drownArrow">
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Section;
