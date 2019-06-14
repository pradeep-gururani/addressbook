import * as actions from "../actions";
import axios from "axios";
import { call, put, select } from "redux-saga/effects";
// import fireApi from "../../services/fireApi";
import {base_url} from '../../config';
export function* getUserDataRequest(action) {
    try {
        let error = null;
        let url = base_url;
        const res = yield axios
        .get(url, {
        method: "GET"
        })
        .then(res => {
        return res;
        })
        .catch(err => {
        error = err;
        return err;
        });

        if (error !== null) {
            yield put(actions.getUserDataError({ message: "Error in api request" }));
        } else {
            yield put(actions.getUserDataSuccess({ data: res.data }));
        }

    } catch (e) {
      yield put(actions.getUserDataError());
    }
  }