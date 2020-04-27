## Workshop Guideline

### Preparation

- Generate project with create-react-app, using node v12.16.1
- Install below node modules with npm / yarn
```
npm install --save react-router-dom redux redux-thunk redux-logger react-redux antd @ant-design/icons dotenv axios lodash node-sass
```
- Replace JSX in App.js with empty div and import below code
```
import 'antd/dist/antd.css';
```
- Delete styling in App.css, we wont use it
- Add below google font stylesheet to index.html in /public
```
<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap" rel="stylesheet">
```

- Change font family in index.css body
```
font-family: 'Ubuntu', sans-serif;
```  



### Develop first React component

1. Create folders /components under /src
2. Develop Header component in /components folder with provided html and css below

> Remember to import below components in Header component
```
import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
```

> Html
```
<header className="workshop-header">
  <div className="top-header white-theme">
    <div className="header-wrapper">
      <div className="title">IES Training</div>
      <div className="header-menu">
        <Button type="danger" icon={<LogoutOutlined />} size="large">
          Logout
        </Button>
      </div>
    </div>
  </div>
  <h1 className="bottom-header">
    React Online Workshop
  </h1>
</header>
```

> CSS
```
.workshop-header {
  width: 100%;
  background-color: #8C00EE;
  color: white;

  .top-header {
    width: 100%;
    padding: 1rem 5%;
    position: fixed;
    z-index: 10;
    transition: background-color .2s ease-in;

    .header-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.5rem;
    }

    .title {
      transition: color .2s ease-in;
    }

    &.white-theme {
      background-color: white;
      box-shadow: 0 0 5px 2px rgba(0, 0, 0, .33);

      .title {
        color: #8C00EE;
      }
    }
  }

  .bottom-header {
    margin: 0 auto;
    padding: 6rem 5% 2rem;
    font-size: 2.625rem;
    color: white;
  }
}
```


### Develop EmployeeTable component

1. Develop EmployeeTable component in /components folder with [Ant Design Table component](https://ant.design/components/table/),
using dummy list data and style the table whatever you like at this moment
2. Using axios library to call [Dummy API](http://dummy.restapiexample.com/api/v1/employees) with GET method and then store into component state
3. Bind the state to JSX

### Update Header component

- Only include .white-theme class name when user scroll down the page
  > hint: add event listener in componentDidMount
  

### Setup Routing and create page component

1. Create folder /pages under /src
2. Develop EmployeePage component in /pages, embed with Header and EmployeeTable,
then put EmployeePage into App component  

3. Develop LoginPage component in /pages folder with [Ant Design Form component](https://ant.design/components/form/)
4. Setup Routing with react-router


### Explain and implement Redux

1. Understand redux concept and why do we need it
2. Create folder /core under /src
3. Create folders /actions and /reducers under /core
4. Add actionTypes.js file in /actions
5. Develop employee action for employee list API call
6. Develop employee reducer and root reducer
7. Create store in index.js
8. Dispatch action from EmployeeTable and using props from store data

 > Remark: Learn more about redux middleware async action handling https://redux.js.org/advanced/async-actions
 
 

### Implement login flow with Firebase authentication

1. Learn more on [Firebase authentication](https://firebase.google.com/docs/auth/web/password-auth?authuser=0)
2. [Create new Firebase project](https://console.firebase.google.com/)
2. Setup sign-in method "Email/Password" and add testing user on Firebase auth console
4. [Add Firebase SDK support to our project](https://firebase.google.com/docs/web/setup?authuser=0)
5. Develop authAction, authReducer with both login logout function
6. Implement login feature in LoginPage and logout feature in Header
7. Handle redirection after successful login/logout
8. Check login status for app initialization case https://firebase.google.com/docs/auth/web/manage-users
9. Privillege content redirection handling:
   > User must login to access EmployeePage. User must logout to access LoginPage
10. Add [error meesage](https://ant.design/components/message/) for user login failure


### Firebase deployment workflow

1. Download the source code from codesandbox
2. Install Firebase CLI
   > npm install -g firebase-tools
3. Login to Firebase and init project with command
    ```
    firebase login
    firebase init
    ```

4. Build CRA project with command
   > npm run build
5. Deploy /build to firebase hosting with command
   > firebase deploy
   
   
   
Thanks for your participation !
