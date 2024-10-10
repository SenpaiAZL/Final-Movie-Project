import { configureStore } from "@reduxjs/toolkit";
import trendReducer from "./Reducer/trendReducer";
import detailReducer from "./Reducer/detailReducer";

const store = configureStore({
  reducer: {
    // theme: themeReducer,
    trend: trendReducer,
    detail: detailReducer,
  },
});
export default store;
