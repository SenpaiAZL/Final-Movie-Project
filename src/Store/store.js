import { configureStore } from "@reduxjs/toolkit";
import trendReducer from "./Reducer/trendReducer";
import detailReducer from "./Reducer/detailReducer";
import searchReducer from "./Reducer/searchReducer";

const store = configureStore({
  reducer: {
    // theme: themeReducer,
    trend: trendReducer,
    detail: detailReducer,
    search: searchReducer,
  },
});
export default store;
