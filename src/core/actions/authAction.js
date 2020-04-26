import _ from 'lodash';
import * as types from './actionTypes';

export const signInWithEmail = (email, password, callback) => {
  return (dispatch) => {
    dispatch({
      type: types.LOGIN_LOADING
    });

    window.firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res) => {
        dispatch({
          type: types.LOGIN_SUCCESS,
          payload: res
        });

        if (_.isFunction(callback)) {
          callback();
        }
      })
      .catch((error) => {
        dispatch({
          type: types.LOGIN_FAILURE,
          error
        });
      });
  };
};

export const signOut = (callback) => {
  return (dispatch) => {
    dispatch({
      type: types.LOGOUT_LOADING
    });

    window.firebase.auth().signOut()
      .then(() => {
        dispatch({
          type: types.LOGOUT_SUCCESS
        });

        if (_.isFunction(callback)) {
          callback();
        }
      })
      .catch((error) => {
        dispatch({
          type: types.LOGOUT_FAILURE,
          error
        });
      });
  };
};

export const updateLoginStatus = () => {
  return (dispatch) => {
    window.firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: types.UPDATE_LOGIN_STATUS,
          login: true,
          user
        });
      } else {
        dispatch({
          type: types.UPDATE_LOGIN_STATUS,
          login: false,
          user: {}
        })
      }
    });
  }
};
