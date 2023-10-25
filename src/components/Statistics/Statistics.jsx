// import React from 'react'
import "./Statistics.css";

import rank from "../../assets/rank.png";
import percentile from "../../assets/percentile.png";
import correct from "../../assets/correct.png";

const Statistics = () => {
  return (
    <div className="statistics">
      <div className="statistics-container">
        <h3 className="statistics-heading">Quick Statistics</h3>
        <div className="statistics-criterias">
          <div className="criteria ">
            <img src={rank} alt={"Rank"} />
            <div className="criteria-score">
              <h4>12,890</h4>
              <label>YOUR RANK</label>
            </div>
          </div>
          <div className="border"></div>
          <div className="criteria">
            <img src={percentile} alt={"Percentile"} />
            <div className="criteria-score">
              <h4>37%</h4>
              <label> PERCENTILE</label>
            </div>
          </div>
          <div className="border"></div>
          <div className="criteria">
            <img src={correct} alt={"correct"} />
            <div className="criteria-score">
              <h4>07/15</h4>
              <label>CORRECT ANSWERS</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
