export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_RANK":
      return { ...state, rank: action.payload };
    case "SET_PERCENTILE":
      return { ...state, percentile: action.payload };
    case "SET_SCORE":
      return { ...state, score: action.payload };
    default:
      return state;
  }
};
