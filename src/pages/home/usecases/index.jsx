import React, { useState } from "react";
import usecasedata from "../../../usecasedata";
import Usecase from "../../../components/basic/usecase";
import "./usecases.css";
// import { Link } from "react-router-dom";
const Usecases = () => {
  const [index, setIndex] = useState(0);

  const transformValue = `translateX(${-index * 1200}px)`;

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
    <div className="use-cases-div">
      <div className="usecases" id="use-cases">
        <p className="usecases-heading">Use cases of QRhive</p>
        <div
          className="usecases-container"
          style={{ transform: transformValue }}>
          {usecasedata.map((usecase) => {
            return (
              // <Link to={usecase.path}>
                <Usecase
                  key={usecase.id}
                  title={usecase.title}
                  content={usecase.content}
                  image={usecase.image}
                  text={usecase.text}
                  path={usecase.path}
                />
              // </Link>
            );
          })}
        </div>
        <div className="usecases-btn">
          <button
            className={
              index === 0 ? "usecase-btn btn-highlight" : "usecase-btn"
            }
            onClick={oneMove}>
            1
          </button>
          <button
            className={
              index === 1 ? "usecase-btn btn-highlight" : "usecase-btn"
            }
            onClick={twoMove}>
            2
          </button>
          <button
            className={
              index === 2 ? "usecase-btn btn-highlight" : "usecase-btn"
            }
            onClick={threeMove}>
            3
          </button>
          <button
            className={
              index === 3 ? "usecase-btn btn-highlight" : "usecase-btn"
            }
            onClick={fourMove}>
            4
          </button>
          <button
            className={
              index === 4 ? "usecase-btn btn-highlight" : "usecase-btn"
            }
            onClick={fiveMove}>
            5
          </button>
          <button
            className={
              index === 5 ? "usecase-btn btn-highlight" : "usecase-btn"
            }
            onClick={sixMove}>
            6
          </button>
        </div>
      </div>
    </div>
  );
};

export default Usecases;
