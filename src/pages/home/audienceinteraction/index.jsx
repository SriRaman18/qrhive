import React from "react";
import "./audienceinteraction.css";
import { Chart, Check } from "../../../assets";
const Audienceinteraction = () => {
  return (
    <div className="audienceinteraction">
      <div className="audienceinteraction-head">
        <h2 className="audienceinteraction-head-heading">
          Uncover audience interactions with each QR Code.
        </h2>
        <p className="audienceinteraction-head-para">
          Gain essential insights to identify successful codes and those needing
          adjustments.
        </p>
      </div>
      <div className="audienceinteraction-body">
        <div className="audienceinteraction-body-texts">
          <div className="audienceinteraction-icon-text">
            <img
              src={Check}
              alt="check-circle"
              className="audienceinteraction-icon-text-img"
            />
            <p>
              Examine intricate scan data to glean insights from your audience's
              interactions and enhance decision-making.
            </p>
          </div>
          <div className="audienceinteraction-icon-text">
            <img
              src={Check}
              alt="check-circle"
              className="audienceinteraction-icon-text-img"
            />
            <p>
              Instantly access engagement metrics on your Bitly dashboard,
              eliminating the need for complex tracking tools.
            </p>
          </div>
          <div className="audienceinteraction-icon-text">
            <img
              src={Check}
              alt="check-circle"
              className="audienceinteraction-icon-text-img"
            />
            <p>
              Measure QR Code effectiveness to expand your understanding and
              connect with your audience according to their preferences.
            </p>
          </div>
        </div>
        {/* <div className="audience-interaction-pic"> */}
        <Chart className="audience-interaction-svg" />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Audienceinteraction;
