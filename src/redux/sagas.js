import constants from "./constants";
import { takeLatest, takeEvery, all } from "redux-saga/effects";
// import { getWeatherRequest } from "./getWeather/action";
import {getUserDataRequest} from './getData/action';
function* watchActions() {
  yield takeLatest(constants.GET_USER_DATA_REQUEST, getUserDataRequest);  
}

export default function* rootSaga() {
  yield all([watchActions()]);
}
