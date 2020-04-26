import React, { Component } from 'react';
import { connect } from "react-redux";

import Header from "../../components/Header/Header";
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';
import _ from "lodash";

class EmployeePage extends Component {

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { login, loading, redirectToLogin } = this.props;

    if (!_.isEqual(prevProps, this.props) && !login && !loading) {
      redirectToLogin();
    }
  }

  render() {
    return (
      <div className="employee-page">
        <Header redirectToLogin={this.props.redirectToLogin} />
        <EmployeeTable />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { auth = {} } = state;

  return {
    login: auth.login,
    loading: auth.loading
  };
};

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeePage);
