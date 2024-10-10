export const SET_TREND = "SET_TREND";
export const setTrend = (trend) => {
  return {
    type: SET_TREND,
    payload: trend,
  };
};
