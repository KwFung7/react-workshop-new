import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.scss';
import { signOut, updateLoginStatus } from '../../core/actions/authAction';

import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      whiteTheme: false
    };
  }

  handleScroll = () => {
    this.setState({
      whiteTheme: window.pageYOffset > 0
    });
  };

  handleLogout = () => {
    const { signOut, redirectToLogin } = this.props;
    signOut(redirectToLogin);
  };

  componentDidMount() {
    this.props.updateLoginStatus();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <header className="workshop-header">
        <div className={`top-header ${this.state.whiteTheme ? 'white-theme' : ''}`}>
          <div className="header-wrapper">
            <div className="title">IES Training</div>
            {
              this.props.login &&
              <div className="header-menu">
                <Button type="danger" icon={<LogoutOutlined />} size="large" onClick={this.handleLogout}>
                  Logout
                </Button>
              </div>
            }
          </div>
        </div>
        <h1 className="bottom-header">
          React Online Workshop
        </h1>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  const { auth = {} } = state;

  return {
    login: auth.login
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: (callback) => { dispatch(signOut(callback)); },
    updateLoginStatus: () => { dispatch(updateLoginStatus()); }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
