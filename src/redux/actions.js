import {createAction} from 'redux-actions';
import constants from './constants';

export const getUserDataRequest = createAction(constants.GET_USER_DATA_REQUEST);
export const getUserDataSuccess = createAction(constants.GET_USER_DATA_SUCCESS);
export const getUserDataError = createAction(constants.GET_USER_DATA_ERROR);