import React from "react";
import Storydiv from "../../../components/basic/storydiv";
// import { StoryOne } from "./assets";
import { StoryOne, StoryTwo, StoryThree, StoryFourth } from "../../../assets";
import "./values.css";
function Values() {
  return (
    <div className="values">
      <div className="values-text">
        <div className="title">Our values</div>
        <p className="story-text">
          The story and values behind
          <br /> our company
        </p>
      </div>
      <div className="values-boxes">
        <Storydiv
          pic={StoryOne}
          heading="Innovation"
          text="QRhive propels innovation within QR codes, predicting and fulfilling future requirements."
        />
        <Storydiv
          pic={StoryTwo}
          heading="Team work"
          text="QRhive succeeds through united strengths, surpassing expectations with collaborative synergy."
        />
        <Storydiv 
          pic={StoryThree}
          heading="Excellence"
          text="QRhive embed excellence into every QR code, upholding the highest standards in both our work quality and client satisfaction."
        />
        <Storydiv
          pic={StoryFourth}
          heading="Responsibility"
          text="We craft QR codes as impactful solutions, respecting ethics, privacy, and user well-being in every interaction."
        />
      </div>
    </div>
  );
}

export default Values;
