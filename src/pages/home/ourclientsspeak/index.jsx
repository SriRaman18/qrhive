import React, { useState } from "react";
import "./ourclientsspeak.css";
import Clientsfeedback from "../../../components/basic/clientsfeedback";
import Ourclientsspeakdata from "../../../ourclientsspeakdata";
// import { BiSolidQuoteAltLeft } from "react-icons/bi";

function Ourclientsspeak() {
  const [index, setIndex] = useState(0);

  const transformValue = `translateX(${-index * 1240}px)`;

  function oneMove() {
    setIndex(0);
  }
  function twoMove() {
    setIndex(1);
  }
  function threeMove() {
    setIndex(2);
  }
  return (
    <div className="clients-speak">

    <div className="our-clients-speak">
      <h1 className="our-clients-speak-heading">Our clients speak</h1>
      <div className="our-clients-speak-container" style={{ transform: transformValue }}>
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
      </div>
      
          </div>
    </div>
  );
}

export default Ourclientsspeak;
