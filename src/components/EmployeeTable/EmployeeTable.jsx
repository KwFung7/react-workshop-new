import React, { Component } from 'react';
import './EmployeeTable.scss';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getEmployeeList } from '../../core/actions/employeeAction';

import { Table } from 'antd';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'Employee Name',
    dataIndex: 'employee_name',
    key: 'employee_name',
  },
  {
    title: 'Age',
    dataIndex: 'employee_age',
    key: 'employee_age',
  },
  {
    title: 'Salary',
    dataIndex: 'employee_salary',
    key: 'employee_salary',
  },
];

class EmployeeTable extends Component {

  componentDidMount() {
    if (_.isEmpty(this.props.employeeList)) {
      this.props.getEmployeeList();
    }
  }

  render() {
    const { employeeList, loading } = this.props;

    return (
      <div className="employee-table-wrapper">
        <h3>DUMMY DATA</h3>
        <Table
          columns={columns}
          dataSource={employeeList}
          loading={loading}
          pagination={{ defaultPageSize: 20 }}
          bordered
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { employee } = state;

  return {
    employeeList: employee.employeeList,
    loading: employee.loading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEmployeeList: () => { dispatch(getEmployeeList()) }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmployeeTable);
