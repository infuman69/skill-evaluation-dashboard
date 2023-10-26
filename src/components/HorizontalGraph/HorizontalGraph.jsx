import "./HorizontalGraph.css";
// import { Bar } from "react-chartjs-2";
// import { BarChart } from "@tremor/react";
import { BarList } from "@tremor/react";

import PropTypes from "prop-types";
// import { useEffect, useState } from "react";

const HorizontalGraph = ({ text, percentage, color }) => {
  // const [progress, setProgress] = useState(0);
  const data = [{
    name: "",
    value:parseInt(percentage)
  },{
    // name: "hello",
    value:100-parseInt(percentage)
  }]
  return (
    <div className="hori-graph">
      <label>{text}</label>
      <div className="graph">
       <BarList data={data} showAnimation={true} />

        {/* <span className="percentage">{percentage}</span> */}
      </div>
    </div>
  );
};

HorizontalGraph.propTypes = {
  text: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default HorizontalGraph;
