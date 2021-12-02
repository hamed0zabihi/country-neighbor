import { combineReducers } from "redux";
import { Countries } from "./Country";
import LocalFakeData from "./LocalFakeData";

export const reducers = combineReducers({
  fakeData: LocalFakeData,
  country: Countries,
});
