import { combineReducers } from "redux";
import LocalFakeData from "./LocalFakeData";

export const reducers = combineReducers({
  fakeData: LocalFakeData,
});
