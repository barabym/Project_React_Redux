import { combineReducers } from "redux";
import { appReducer } from "./app.reducer";
import { sidebarReducer } from "./sidebar.reducer";

export const rootReducer = combineReducers({
  appStore: appReducer,
  sidebarStore: sidebarReducer,
});