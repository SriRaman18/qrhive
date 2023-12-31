import React, { useState, useEffect } from "react";
import usecasedata from "../../../usecasedata";
import Usecase from "../../../components/basic/usecase";
import "./usecases.css";
import { useNavigate } from "react-router-dom";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Usecases = () => {
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();
  const screenWidth = window.innerWidth;
  const transformValue = `translateX(${
    -index * (screenWidth > 576 ? 600 : 305)
  }px)`;
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

  function sevenMove() {
    setIndex(6);
  }
  function eightMove() {
    setIndex(7);
  }
  function nineMove() {
    setIndex(8);
  }
  function tenMove() {
    setIndex(9);
  }
  function elMove() {
    setIndex(10);
  }
  function tlMove() {
    setIndex(11);
  }


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards to show
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 576, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1, // Number of cards to show on smaller screens
        },
      },
    ],
  };
  
  
  return (
    <div className="use-cases-div" id="use-cases">
      <div className="usecases">
        <p className="usecases-heading" data-aos="fade-down">
          Use cases of QRhive
        </p>
        <div
          className="usecases-container"
          style={{ transform: transformValue }}>

            
          {usecasedata.map((usecase) => {
            return (
              <div
                key={usecase.id}
                onClick={() => navigate(`/usecases/${usecase.path}`)}>
                <Usecase
                  key={usecase.id}
                  title={usecase.title}
                  content={usecase.content}
                  image={usecase.image}
                  text={usecase.text}
                  path={usecase.path}
                  position={usecase.position}
                  color={usecase.color}
                  backGroundColor={usecase.backgroundColor}
                />
              </div>
            );
          })}
        </div>
        <div className="usecases-btn" data-aos="fade-down">
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
          <button
            className={
              index === 6 ? "usecase-btn btn-highlight" : "usecase-btn"
            }
            onClick={sevenMove}>
            7
          </button>
          <button
            className={
              index === 7 ? "usecase-btn btn-highlight" : "usecase-btn"
            }
            onClick={eightMove}>
            8
          </button>
          <button
            className={
              index === 8 ? "usecase-btn btn-highlight" : "usecase-btn"
            }
            onClick={nineMove}>
            9
          </button>
          <button
            className={
              index === 9 ? "usecase-btn btn-highlight" : "usecase-btn"
            }
            onClick={tenMove}>
            10
          </button>
          <button
            className={
              index === 10 ? "usecase-btn btn-highlight" : "usecase-btn"
            }
            onClick={elMove}>
            11
          </button>
          <button
            className={
              index === 11 ? "usecase-btn btn-highlight" : "usecase-btn"
            }
            onClick={tlMove}>
            12
          </button>
        </div>
      </div>
    </div>
  );
};

export default Usecases;



