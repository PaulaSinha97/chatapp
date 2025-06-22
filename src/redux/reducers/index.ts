// import { combineReducers } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { fetchReducer } from "./userReducer"; // Example reducer
import { loginReducer } from "./loginReducer";

export const rootReducer = combineReducers({
  userData: fetchReducer,
  loginData: loginReducer,
});
