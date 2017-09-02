/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  CHANGE_USERNAME,
  CLICK_EMPLOYEE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  username: '',
});

function homeReducer(state = initialState, action) {
  console.log('state',state);
  switch (action.type) {
    case CHANGE_USERNAME:

      // Delete prefixed '@' from the github username
      return state
        .set('username', action.name.replace(/@/gi, ''));
    case CLICK_EMPLOYEE:
      var clickedEmployees = state.get('clickedEmployees') || [];
      if ( clickedEmployees.includes(action.employee) ) {
        return state;
      }
      clickedEmployees.unshift(action.employee);
      var lastThreeEmployees = clickedEmployees;
      if (clickedEmployees.length > 3) {
        lastThreeEmployees = clickedEmployees.slice(0,3);
      } else {
        lastThreeEmployees = clickedEmployees.slice(0, clickedEmployees.length);
      }
      console.log("after unshift", lastThreeEmployees);
      // state.set('clickedEmployees', []);

      console.log('state', state.set('employeeOne', lastThreeEmployees[0]));
      console.log('object assign stte', Object.assign({}, state, {
        employeeOne: lastThreeEmployees[0]
      }));
      return state.set('clickedEmployees', lastThreeEmployees);
    default:
      return state;
  }
}

export default homeReducer;
