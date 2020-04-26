import * as types from './actionTypes';

export const signInWithEmailAndPassword = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: types.LOGIN_LOADING
    });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res) => {
        dispatch({
          type: types.LOGIN_SUCCESS,
          payload: res
        });
      })
      .catch((error) => {
        dispatch({
          type: types.LOGIN_FAILURE,
          error
        });
      });
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: types.LOGOUT_LOADING
    });

    firebase.auth().signOut()
      .then((res) => {
        dispatch({
          type: types.LOGOUT_SUCCESS,
          payload: res
        });
      })
      .catch((error) => {
        dispatch({
          type: types.LOGOUT_FAILURE,
          error
        });
      });
  };
};
