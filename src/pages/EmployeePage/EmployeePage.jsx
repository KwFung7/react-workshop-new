import React from 'react';
import Header from "../../components/Header/Header";
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';

function EmployeePage() {
  return (
    <div className="employee-page">
      <Header />
      <EmployeeTable />
    </div>
  )
}

export default EmployeePage;
