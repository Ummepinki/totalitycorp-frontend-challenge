import React from "react";
import Button from "../Button";
import { IoIosArrowDown } from "react-icons/io";
import "./Section.css";
const Section = ({
  title,
  desc,
  descLink,
  backgroundImg,
  leftBtnTxt,
  leftBtnLink,
  rightBtnTxt,
  rightBtnLink,
  twoButtons,
  first,
}) => {
  return (
    <div
      className="section"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="section__container">
        <div className="section__text">
          <p>{title}</p>
          <div className="section__textDesc">
            <p>{desc}</p>
          </div>
        </div>
        <div className="section__lowerThird">
          <div className="section__buttons">
            <Button imp="primary" text={leftBtnTxt} link={leftBtnLink} />
            {twoButtons && (
              <Button imp="secondary" text={rightBtnTxt} link={rightBtnLink} />
            )}
          </div>

          {first && (
            <div className="section__expand">
              <IoIosArrowDown />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section;
