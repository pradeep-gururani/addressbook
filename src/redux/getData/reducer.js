import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";

const initialState = {
  
  userdata: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
    data: {}
  }
};

const handleSignupReset = (state, action) =>
  update(state, { $merge: initialState });

const handleUserDataRequest = (state, action) =>
  update(state, {
    userdata: {
      isLoading: { $set: true },
      isSuccess: { $set: false },
      isError: { $set: false },
      message: { $set: "" }
    }
  });
const handleUserDataSuccess = (state, action) =>
  update(state, {
    userdata: {
      isLoading: { $set: false },
      isSuccess: { $set: true },
      isError: { $set: false },
      data: { $set: action.payload }
    }
  });
const handleUserDataError = (state, action) =>
  update(state, {
    userdata: {
      isLoading: { $set: false },
      isSuccess: { $set: false },
      isError: { $set: true },
      message: { $set: action.payload }
    }
  });

export default handleActions(
  {
    
    [constants.GET_USER_DATA_REQUEST]: handleUserDataRequest,
    [constants.GET_USER_DATA_SUCCESS]: handleUserDataSuccess,
    [constants.GET_USER_DATA_ERROR]: handleUserDataError,
    
  },
  initialState
);
