// import React from 'react'
import Statistics from "../../components/Statistics/Statistics";
import TestSection from "../../components/TestSection/TestSection";
import "./SkillTestPage.css";

const SkillTestPage = () => {
  return (
    <div className="skill-test-container">
      <p className="skill-test-heading">Skill Test</p>
      <div className="skill-test-analytics">
        <div className="skill-test-analytics-statistics-and-graph">
          <TestSection />
          <Statistics />
        </div>
        <div className="skill-test-analytics-">
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default SkillTestPage;
