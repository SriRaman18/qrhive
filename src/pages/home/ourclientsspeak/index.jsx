import React, { useState } from "react";
import "./ourclientsspeak.css";
import Clientsfeedback from "../../../components/basic/clientsfeedback";
import Ourclientsspeakdata from "../../../ourclientsspeakdata";


function Ourclientsspeak() {
  const [index, setIndex] = useState(0);
  let transformValue;
  const screenWidth = window.innerWidth;
  transformValue = `translateX(${-index * (screenWidth > 1200 ? 620 : 470)}px)`;

  if (screenWidth < 578) {
    transformValue = `translateX(${-index *385}px)`;
  }
  function oneMove() {
    setIndex(0);
  }
  function twoMove() {
    setIndex(1);
  }
  function threeMove() {
    setIndex(2);
  }
  function fourMove() {
    setIndex(3);
  }
  function fiveMove() {
    setIndex(4);
  }
  function sixMove() {
    setIndex(5);
  }
  return (
    <div className="clients-speak">
      <div className="our-clients-speak">
        <h2 className="our-clients-speak-heading" data-aos="fade-down">Our clients speak</h2>
        <div
          className="our-clients-speak-container"
          style={{ transform: transformValue }}>
          {Ourclientsspeakdata.map((data) => {
            return (
              <Clientsfeedback
                key={data.id}
                heading={data.heading}
                text={data.text}
                name={data.name}
                domain={data.domain}
                pic={data.pic}
              />
            );
          })}
        </div>
        <div className="circles">
          <div
            className={index === 0 ? "circle highlight" : "circle"}
            onClick={oneMove}></div>
          <div
            className={index === 1 ? "circle highlight" : "circle"}
            onClick={twoMove}></div>
          <div
            className={index === 2 ? "circle highlight" : "circle"}
            onClick={threeMove}></div>
          <div
            className={index === 3 ? "circle highlight" : "circle"}
            onClick={fourMove}></div>
          <div
            className={index === 4 ? "circle highlight" : "circle"}
            onClick={fiveMove}></div>
          <div
            className={index === 5 ? "circle highlight" : "circle"}
            onClick={sixMove}></div>
        </div>
      </div>
    </div>
  );
}

export default Ourclientsspeak;
