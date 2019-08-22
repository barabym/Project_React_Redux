import { combineReducers } from "redux";

import { generalReducer } from "./general.reducer";
import { converterReducer } from "./converter.reducer";
import { chartReducer } from "./chart.reducer";

export const rootReducer = combineReducers({
  generalStore: generalReducer,
  converterStore: converterReducer,
  chartStore: chartReducer,
});