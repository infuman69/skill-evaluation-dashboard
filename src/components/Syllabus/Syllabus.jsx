import HorizontalGraph from "../HorizontalGraph/HorizontalGraph";
import "./Syllabus.css";

const Syllabus = () => {
  return (
    <div className="syllabus-container">
      <h4>Syllabus wise Analysis</h4>
      <HorizontalGraph
        text="HTML Tools,Forms,History"
        percentage={80}
        color="#438AF6"
      />
    </div>
  );
};

export default Syllabus;
