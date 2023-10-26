// import React from 'react'
import "./Statistics.css";

import Rank from "../../assets/rank.png";
import Percentile from "../../assets/percentile.png";
import correct from "../../assets/correct.png";
import { useSkill } from "../../context/SkillContext";

const Statistics = () => {
  const { rank, percentile, score } = useSkill();
  return (
    <div className="statistics">
      <div className="statistics-container">
        <h3 className="statistics-heading">Quick Statistics</h3>
        <div className="statistics-criterias">
          <div className="criteria ">
            <img src={Rank} alt={"Rank"} />
            <div className="criteria-score">
              <h4>{rank}</h4>
              <label>YOUR RANK</label>
            </div>
          </div>
          <div className="border"></div>
          <div className="criteria">
            <img src={Percentile} alt={"Percentile"} />
            <div className="criteria-score">
              <h4>{percentile}%</h4>
              <label> PERCENTILE</label>
            </div>
          </div>
          <div className="border"></div>
          <div className="criteria">
            <img src={correct} alt={"correct"} />
            <div className="criteria-score">
              <h4>{score}/15</h4>
              <label>CORRECT ANSWERS</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
