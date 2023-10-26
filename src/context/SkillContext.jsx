import { useContext, createContext, useReducer } from "react";
import { reducer } from "./SkillReducer";

import PropTypes from "prop-types";
import { DonutChart } from "@tremor/react";

const SkillContext = createContext();

export const useSkill = () => {
  return useContext(SkillContext);
};

const initialState = {
  rank: "12890",
  percentile: "37",
  score: "7",
};

export const SkillProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { rank, percentile, score } = state;
  return (
    <SkillContext.Provider value={{ rank, percentile, score, dispatch }}>
      {children}
    </SkillContext.Provider>
  );
};

SkillProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
