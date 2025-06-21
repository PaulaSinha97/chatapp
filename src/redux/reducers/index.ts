// import { combineReducers } from "@reduxjs/toolkit";
import {combineReducers } from "redux";
import { fetchReducer } from "./userReducer"; // Example reducer

export const rootReducer = combineReducers({
  userData: fetchReducer,
});
