import React from "react";
import Module from "./Home/Module";
import styled from "styled-components";
import ModelS from "../assets/ModelS.jpeg";
import Model3 from "../assets/Model3.jpeg";
import ModelX from "../assets/Desktop-ModelX.jpeg";
import ModelY from "../assets/Desktop-ModelY.jpeg";
import SolarRoof from "../assets/Desktop-SolarRoof.jpeg";
import SolarPanel from "../assets/Desktop-SolarPanels.jpeg";
import downArrow from "../assets/down-arrow.svg";
import Accessories from "../assets/Accessories.jpg";
const Home = () => {
  return (
    <>
      <Main>
        <Module
          title="Model S"
          text=" Order Online for Touchless Delivery"
          leftBtn="Customer Order"
          rightBtn="Existing Inventory"
          backgroundImg={ModelS}
          dropdown={downArrow}
          ifDropDownExit
        />
        <Module
          title="Model 3"
          text=" Order Online for Touchless Delivery"
          leftBtn="Customer Order"
          rightBtn="Existing Inventory"
          backgroundImg={Model3}
          dropdown={downArrow}
        />
        <Module
          title="Model X"
          text=" Order Online for Touchless Delivery"
          leftBtn="Customer Order"
          rightBtn="Existing Inventory"
          backgroundImg={ModelX}
          dropdown={downArrow}
        />
        <Module
          title="Model Y"
          text=" Order Online for Touchless Delivery"
          leftBtn="Customer Order"
          rightBtn="Existing Inventory"
          backgroundImg={ModelY}
          dropdown={downArrow}
        />
        <Module
          title="Solar Roof"
          text=" Produce Clean Energy From Your Roof"
          leftBtn="Order Now"
          rightBtn="Learn More"
          backgroundImg={SolarRoof}
          dropdown={downArrow}
          ifBlackColorExit
        />
        <Module
          title="Solar Panels"
          text=" Lowest Cost Solar Panels in America"
          leftBtn="Order Now"
          rightBtn="Learn More"
          backgroundImg={SolarPanel}
          dropdown={downArrow}
          ifBlackColorExit
        />
        <Module
          title="Accessories"
          text=" "
          leftBtn="Shop Now"
          backgroundImg={Accessories}
          dropdown={downArrow}
          ifBlackColorExit
        />
      </Main>
    </>
  );
};
const Main = styled.main`
  width: auto;
  height: auto;
  overflow: auto;
  scroll-behavior: smooth;
  scroll-snap-type: mandatory;
  scroll-snap-align: initial;
`;
export default Home;
