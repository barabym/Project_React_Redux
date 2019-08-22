import { combineReducers } from "redux";
import { sidebarReducer } from "./sidebar.reducer";
import { converterReducer } from "./converter.reducer";

export const rootReducer = combineReducers({
  sidebarStore: sidebarReducer,
  converterStore: converterReducer,
});