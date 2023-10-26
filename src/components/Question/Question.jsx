import { useSkill } from "../../context/SkillContext";
import { DonutChart } from "@tremor/react";
import "./Question.css";

const Question = () => {
  const { score } = useSkill();

  return (
    <div className="question-container">
      <div className="question-head-number">
        <h4>Question Analysis</h4>
        <span>{parseInt(score) < 10 ? `0${score}` : score}/15</span>
      </div>
      <p className="question-text">
        <span>You scored 7 question correct out of 15.</span>
        However it<br/> still needs some improvements
      </p>
      <div className="donut-chart">
        <DonutChart
          data={[
            {
              name: "Correct",
              value: parseInt(score),
            },
            {
              name: "Incorrect",
              value: 15 - parseInt(score),
            },
          ]}
          showAnimation={true}
        />
      </div>
    </div>
  );
};

export default Question;
