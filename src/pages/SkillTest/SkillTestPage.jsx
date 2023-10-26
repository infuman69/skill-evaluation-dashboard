// import React from 'react'
import ComparisonGraph from "../../components/ComparisonGraph/ComparisonGraph";
import Question from "../../components/Question/Question";
import Statistics from "../../components/Statistics/Statistics";
import Syllabus from "../../components/Syllabus/Syllabus";
import TestSection from "../../components/TestSection/TestSection";
import { SkillProvider } from "../../context/SkillContext";
import "./SkillTestPage.css";


const SkillTestPage = () => {
  return (
    <SkillProvider>
      <div className="skill-test-container">
        <p className="skill-test-heading">Skill Test</p>
        <div className="skill-test-analytics">
          <div className="skill-test-analytics-statistics-and-graph">
            <TestSection />
            <Statistics />
            <ComparisonGraph/>
          </div>
          <div className="syllabus-question">
            <Syllabus />
            <Question />            
          </div>
        </div>
      </div>
    </SkillProvider>
  );
};

export default SkillTestPage;
