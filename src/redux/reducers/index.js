import { combineReducers } from "redux";
import loginReducer from "./loginReducer";

export const reducers = (history) => combineReducers({
    loginReducer,
})