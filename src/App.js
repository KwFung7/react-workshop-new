import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import EmployeePage from "./pages/EmployeePage/EmployeePage";
import LoginPage from "./pages/LoginPage/LoginPage";

const path = {
  root: '/',
  employees: '/employees',
  login: '/login'
};

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={path.root}>
          <Redirect to={path.employees} />
        </Route>
        <Route path={path.employees} render={({ history }) =>
          <EmployeePage redirectToLogin={() => { history.push(path.login); }} />
        }>
        </Route>
        <Route path={path.login} render={({ history }) =>
          <LoginPage redirectToRoot={() => { history.push(path.root); }} />
        }>
        </Route>
        <Route render={() => <div>404 Not Found</div>} />
      </Switch>
    </Router>
  );
}

export default App;
