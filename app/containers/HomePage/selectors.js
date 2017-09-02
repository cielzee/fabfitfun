/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.get('username')
);

const getClickedEmployees = () => createSelector(
  selectHome,
  (homeState) => homeState.get('clickedEmployees')
);

const getEmployeeOne = () => createSelector(
  selectHome,
  (homeState) => homeState.get('employeeOne')
)

export {
  selectHome,
  makeSelectUsername,
  getClickedEmployees,
  getEmployeeOne,
};
