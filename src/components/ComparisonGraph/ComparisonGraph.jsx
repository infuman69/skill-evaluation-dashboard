import "./ComparisonGraph.css";
import Graph from "../../assets/Graph.png";
import { useSkill } from "../../context/SkillContext";
import { LineChart } from "@tremor/react";


const ComparisonGraph = () => {
  const { percentile } = useSkill();
  const data =[
    {
        percentile :0
    },{
        percentile:20
    },{
        percentile : 40
    },{
        percentile:60
    },{
        percentile:80
    },{
        percentile:100
    }
  ]
  return (
    <div className="comparison-graph-container">
      <h4 className="comparison-graph-heading">Comparison Graph</h4>
      <div className="comparison-graph-text">
        <p>
          <span>You scored {percentile} % percentile</span> which is lower than{" "}
          <br />
          the average percentile 72% of all the engineers who took this
          assessment
        </p>
        <img src={Graph} alt={"Graph"} />
      </div>
      <div>
        <LineChart data={data} index="percentile"/>
      </div>
    </div>
  );
};

export default ComparisonGraph;
