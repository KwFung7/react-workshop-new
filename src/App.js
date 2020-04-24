import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import EmployeePage from "./pages/EmployeePage/EmployeePage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/employees"/>
        </Route>
        <Route path="/employees">
          <EmployeePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route render={() => <div>404 Not Found</div>} />
      </Switch>
    </Router>
  );
}

export default App;
