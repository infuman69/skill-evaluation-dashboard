// import React from 'react'
import Statistics from "../../components/Statistics/Statistics";
import TestSection from "../../components/TestSection/TestSection";
import { SkillProvider } from "../../context/SkillContext";
import "./SkillTestPage.css";
SkillProvider;

const SkillTestPage = () => {
  return (
    <SkillProvider>
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
    </SkillProvider>
  );
};

export default SkillTestPage;
