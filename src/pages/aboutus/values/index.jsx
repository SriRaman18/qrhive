import React from "react";
import Storydiv from "../../../components/basic/storydiv";
// import { StoryOne } from "./assets";
import { StoryOne, StoryTwo, StoryThree, StoryFourth } from "../../../assets";
import "./values.css";
function Values() {
  return (
    <div className="values">
      <div className="values-texts">
        <div className="values-title" data-aos="fade-left"><h2 className="values-title" > Our values</h2></div>
        <h2 className="values-text"  data-aos="fade-down">
          The story and values behind
          <br /> our company
        </h2>
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
