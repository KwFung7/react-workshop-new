import React, { Component } from 'react';
import './EmployeeTable.scss';
import axios from 'axios';
import _ from 'lodash';

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
  constructor(props) {
    super();
    this.state = {
      dataSource: [],
      loading: false
    };
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_EMPLOYEE_ENDPOINT)
      .then((res) => {
        if (!_.isEmpty(res.data)) {
          const { data = {} } = res.data;
          this.setState({
            dataSource: data,
            loading: false
          });
        } else {
          this.setState({ loading: false });
        }
      })
      .catch((err) => {
        this.setState({ loading: false });
        console.log(err);
      });
  }

  render() {
    return (
      <div className="employee-table-wrapper">
        <Table columns={columns} dataSource={this.state.dataSource} bordered/>
      </div>
    );
  }
}

export default EmployeeTable;
