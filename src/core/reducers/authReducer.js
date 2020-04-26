import {
  LOGIN_LOADING,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_LOADING,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  userName: '',
  login: false,
  loading: false,
  error: {},
  res: {}
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
        res: action.payload
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
        res: action.payload
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};
