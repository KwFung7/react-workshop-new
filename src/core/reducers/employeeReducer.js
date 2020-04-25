import {
  GET_EMPLOYEE_LOADING,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_FAILURE
} from '../actions/actionTypes';

const initialState = {
  employeeList: [],
  loading: false,
  error: {}
};

export const employee = (state = initialState, action) => {
 switch (action.type) {
   case GET_EMPLOYEE_LOADING:
     return {
       ...state,
       loading: true
     };
   case GET_EMPLOYEE_SUCCESS:
     return {
       ...state,
       employeeList: action.payload,
       loading: false
     };
   case GET_EMPLOYEE_FAILURE:
     return {
       ...state,
       loading: false,
       error: action.error
     };
   default:
     return state;
 }
};
