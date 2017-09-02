/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Card, Icon, Image, Grid } from 'semantic-ui-react'

import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H1 from 'components/H1';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import CardCarousel from './CardCarousel';
import messages from './messages';
import employees from './employees';
import { loadRepos } from '../App/actions';
import { changeUsername, clickEmployee } from './actions';
import { makeSelectUsername, getClickedEmployees, getEmployeeOne } from './selectors';

import FlipMove from 'react-flip-move';

const styles={
  image: {
    background: 'transparent',
  },
  transitionStyles: {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0',
  },
  expandedCard: {
    minHeight: '200px',
    margin: '0 4px',
  },
  pageHeader: {
    margin: '16px 0',
  }
};

const customEnterAnimation = {
  from: { transform: 'scale(0, 1)' },
  to:   { transform: 'scale(1, 1)' }
};

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */

  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos, onClickEmployee, clickedEmployees } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };


    var slideEmployees = clickedEmployees && clickedEmployees.length > 1 && clickedEmployees.slice(0, clickedEmployees.length);

    return (
      <div>
        <H1 style={styles.pageHeader}>About Us</H1>

        { clickedEmployees && clickedEmployees.length > 0 &&
          <FlipMove
          leaveAnimation="none"
          duration={1000}
          style={styles.flex}>
            { clickedEmployees.map((employee, i) => {
              return <Card
                  fluid
                  key={employee.id}
                  onClick={() => onClickEmployee(employee)}
                  style={styles.expandedCard}>
                  <Image size='medium' src={employee.thumbnail} centered style={styles.image}/>
                <Card.Content>
                  <Card.Header>
                    {employee.name}
                  </Card.Header>
                  <Card.Meta>
                    {employee.role}
                  </Card.Meta>
                  <Card.Description>
                    {employee.description}
                  </Card.Description>
                </Card.Content>
              </Card>;
            })}
          </FlipMove>
        }

        <div style={styles.employeeList}>
          <Card.Group itemsPerRow={4}>
          { employees.map(function(employee) {
            return <Card
                key={employee.id}
                onClick={() => onClickEmployee(employee)}>
              <Card.Content>
              <Image floated='left' size='mini' src={employee.thumbnail} style={styles.image}/>
                <Card.Header>
                  {employee.name}
                </Card.Header>
                <Card.Meta>
                  {employee.role}
                </Card.Meta>
              </Card.Content>
            </Card>;
          })}
          </Card.Group>
        </div>
      </div>
    );
  }
}

HomePage.expandEmployeeInfo = function() {
  this.props.onClickEmployee();
}

HomePage.propTypes = {
  onClickEmployee: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onClickEmployee: (employee) =>
    dispatch(clickEmployee(employee)),
  };
}

const mapStateToProps = createStructuredSelector({
  clickedEmployees: getClickedEmployees(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
