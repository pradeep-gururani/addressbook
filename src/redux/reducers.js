import {combineReducers} from "redux";
// import getWeather from "./getWeather/reducer";
import getUserData from './getData/reducer';
const rootReducer = combineReducers({
    getUserData
});

export default rootReducer;