import { useContext, createContext, useReducer } from "react";
import { reducer } from "./SkillReducer";

import PropTypes from "prop-types";

const SkillContext = createContext();

export const useSkill = () => {
  return useContext(SkillContext);
};

const initialState = {
  rank: "",
  percentile: "",
  score: "",
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
