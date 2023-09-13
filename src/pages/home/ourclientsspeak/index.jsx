import React, { useState } from "react";
import "./ourclientsspeak.css";
import Clientsfeedback from "../../../components/basic/clientsfeedback";
import Ourclientsspeakdata from "../../../ourclientsspeakdata";
// import { BiSolidQuoteAltLeft } from "react-icons/bi";

function Ourclientsspeak() {
  const [index, setIndex] = useState(0);

  return (
    <div className="our-clients-speak">
      <h1 className="our-clients-speak-heading">Our clients speak</h1>
      <div className="our-clients-speak-container">
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
          onClick={() => {
            setIndex(0);
          }}></div>
        <div
          className={index === 0 ? "circle highlight" : "circle"}
          onClick={() => {
            setIndex(0);
          }}></div>
        <div
          className={index === 0 ? "circle highlight" : "circle"}
          onClick={() => {
            setIndex(0);
          }}></div>
      </div>
      {/* <BiSolidQuoteAltLeft /> */}
    </div>
  );
}

export default Ourclientsspeak;
