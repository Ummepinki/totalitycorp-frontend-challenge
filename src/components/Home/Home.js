import React from "react";
import Accessories from "../../assets/Accessories.jpg";
import ModelS from "../../assets/ModelS.jpeg";
import Model3 from "../../assets/Model3.jpeg";
import ModelX from "../../assets/Desktop-ModelX.jpeg";
import ModelY from "../../assets/Desktop-ModelY.jpeg";
import SolarPanels from "../../assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "../../assets/Desktop-SolarRoof.jpeg";
import "./Home.css";
import Section from "./Section/Section";

const Home = () => {
  return (
    <div className="home__sectionContainer">
      <Section
        title="Model 3"
        desc="Order online for Touchless Delivery"
        descLink=""
        backgroundImg={Model3}
        leftBtnTxt="Custom Order"
        leftBtnLink=""
        rightBtnTxt="Existing Inventory"
        rightBtnLink=""
        twoButtons="true"
        first
      />
      <Section
        title="Model S"
        desc="Order online for Touchless Delivery"
        descLink=""
        backgroundImg={ModelS}
        leftBtnTxt="Custom Order"
        leftBtnLink=""
        rightBtnTxt="Existing Inventory"
        rightBtnLink=""
        twoButtons="true"
        first
      />
      <Section
        title="Model X"
        desc="Order online for Touchless Delivery"
        descLink=""
        backgroundImg={ModelX}
        leftBtnTxt="Custom Order"
        leftBtnLink=""
        rightBtnTxt="Existing Inventory"
        rightBtnLink=""
        twoButtons="true"
        first
      />
      <Section
        title="Model Y"
        desc="Order online for Touchless Delivery"
        descLink=""
        backgroundImg={ModelY}
        leftBtnTxt="Custom Order"
        leftBtnLink=""
        rightBtnTxt="Existing Inventory"
        rightBtnLink=""
        twoButtons="true"
        first
      />
      <Section
        title="Solar Panels"
        desc="Lowest Cost Solar Panels in America"
        descLink=""
        backgroundImg={SolarPanels}
        leftBtnTxt="Order Now"
        leftBtnLink=""
        rightBtnTxt="Learn More"
        rightBtnLink=""
        twoButtons="true"
        first
      />
      <Section
        title="Solar Roof"
        desc="Produce Clean Energy From Your Roof"
        descLink=""
        backgroundImg={SolarRoof}
        leftBtnTxt="Order Now"
        leftBtnLink=""
        rightBtnTxt="Learn More"
        rightBtnLink=""
        twoButtons="true"
        first
      />
      <Section
        title="Accessories"
        desc=""
        descLink=""
        backgroundImg={Accessories}
        leftBtnTxt="Shop"
        leftBtnLink=""
        rightBtnTxt="Learn More"
        rightBtnLink=""
        twoButtons="true"
        first
      />
    </div>
  );
};

export default Home;
