import {
  LOGIN_LOADING,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_LOADING,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS, UPDATE_LOGIN_STATUS
} from '../actions/actionTypes';
import _ from 'lodash';

const initialState = {
  login: false,
  loading: true,
  info: {},
  error: {}
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: true,
        loading: false,
        info: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case LOGOUT_LOADING:
      return {
        ...state,
        loading: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        login: false,
        loading: false,
        info: {}
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case UPDATE_LOGIN_STATUS:
      const info = _.isEmpty(action.user)
        ? {}
        : { ...state.info, user: action.user };

      return {
        ...state,
        login: action.login,
        loading: false,
        info
      };
    default:
      return state;
  }
};
