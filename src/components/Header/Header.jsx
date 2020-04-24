import React, { Component } from 'react';
import './Header.scss';

import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

class Header extends Component {
  constructor(props) {
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

  componentDidMount() {
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
    );
  }
}

export default Header;
