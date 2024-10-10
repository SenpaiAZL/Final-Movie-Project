export const SET_TREND = "SET_TREND";
export const setTrend = (trend) => {
  return {
    type: SET_TREND,
    payload: trend,
  };
};

export const SET_SEARCH = "SET_SEARCH";
export const setSearch = (search) => {
  return {
    type: SET_SEARCH,
    payload: search,
  };
};
