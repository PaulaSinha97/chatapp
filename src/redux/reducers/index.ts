import { combineReducers } from "redux";
import { fetchReducer } from "./userReducer"; // Example reducer
import { loginReducer } from "./loginReducer";
import { friendsReducer } from "./friendsReducer";

export const rootReducer = combineReducers({
  userData: fetchReducer,
  loginData: loginReducer,
  friendsData: friendsReducer,
});
