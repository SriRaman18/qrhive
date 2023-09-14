import React from "react";
import usecasedata from "../../../usecasedata";
import Usecase from "../../../components/basic/usecase";
import './usecases.css'

const Usecases = () => {
  return (
    <div className="usecases" id="use-cases">
      <p className="usecases-heading">Use cases of QRhive</p>
      <div className="usecases-container">
        {usecasedata.map((usecase) => {
          return (
            <Usecase
              key={usecase.id}
              title={usecase.title}
              content={usecase.content}
              image={usecase.image}
              text={usecase.text}
            />
          );
        })}
      </div>
      <div className="usecases-btn">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>

      </div>
    </div>
  );
};

export default Usecases;
