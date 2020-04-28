import axios from 'axios';
import _ from 'lodash';
import * as types from './actionTypes';

// redux-thunk
export const getEmployeeList = () => {
  return (dispatch) => {
    dispatch({
      type: types.GET_EMPLOYEE_LOADING
    });

    axios.get(process.env.REACT_APP_EMPLOYEE_ENDPOINT)
      .then((res) => {
        if (!_.isEmpty(res.data)) {
          dispatch({
            type: types.GET_EMPLOYEE_SUCCESS,
            payload: res.data
          });
        } else {
          dispatch({
            type: types.GET_EMPLOYEE_SUCCESS,
            payload: []
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: types.GET_EMPLOYEE_FAILURE,
          error
        });
      });
  }
};

// traditional redux
// export const getEmployeeList = () => {
//   return {
//     type: 'ACTION_TYPE',
//     text: 'payload'
//   };
// };
