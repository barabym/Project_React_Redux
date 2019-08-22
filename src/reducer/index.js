import { combineReducers } from "redux";
import { sidebarReducer } from "./sidebar.reducer";
import { converterReducer } from "./converter.reducer";
import { chartReducer } from "./chart.reducer";

export const rootReducer = combineReducers({
  sidebarStore: sidebarReducer,
  converterStore: converterReducer,
  chartStore: chartReducer,
});