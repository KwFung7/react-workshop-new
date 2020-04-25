import { combineReducers } from 'redux';
import { employee } from './employeeReducer';

const rootReducer = combineReducers({
  employee
});

export default rootReducer;
