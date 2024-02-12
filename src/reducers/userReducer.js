// userReducer.js
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    LOGOUT_USER // Import the new action type
  } from '../actions/userActions';
  
  const initialState = {
    loading: false,
    user: null,
    error: null
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        return {
          ...state,
          loading: true
        };
      case FETCH_USERS_SUCCESS:
        return {
          loading: false,
          user: action.payload,
          error: null
        };
      case FETCH_USERS_FAILURE:
        return {
          loading: false,
          user: null,
          error: action.payload
        };
      case LOGOUT_USER: // Handle the logout action
        return {
          loading: false,
          user: null,
          error: null
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  