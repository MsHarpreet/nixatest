// userActions.js
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const LOGOUT_USER = 'LOGOUT_USER'; // Define new action type for logout

export const fetchUserRequest = () => ({
  type: FETCH_USERS_REQUEST
});

export const fetchUserSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: users
});

export const fetchUserFailure = error => ({
  type: FETCH_USERS_FAILURE,
  payload: error
});

export const logoutUser = () => ({
    type: LOGOUT_USER // Action creator for logout
  });

export const fetchUser = (email) => {
  return async dispatch => {
    if (email){
        dispatch(fetchUserRequest());
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
        const user = data.filter(u=>u.email.toLowerCase()===email.toLowerCase())[0];
        if (user)
        dispatch(fetchUserSuccess(user));
        else
        dispatch(fetchUserFailure("User Does not exists."))
    } catch (error) {
      dispatch(fetchUserFailure(error.message));
    }
    }
    
  };

};
