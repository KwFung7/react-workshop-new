import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import EmployeePage from "./pages/EmployeePage/EmployeePage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <div>
      {/*<EmployeePage />*/}
      <LoginPage />
    </div>
  );
}

export default App;
