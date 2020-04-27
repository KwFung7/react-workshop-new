import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { connect } from "react-redux";
import _ from 'lodash';
import './LoginPage.scss';

import Header from '../../components/Header/Header';
import { signInWithEmail } from "../../core/actions/authAction";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class LoginPage extends Component {
  onFinish = values => {
    const { signInWithEmail, redirectToRoot } = this.props;
    signInWithEmail(values.email, values.password, redirectToRoot);
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { login, loading, error, redirectToRoot } = this.props;

    if (!_.isEqual(prevProps, this.props)) {
      if (login && !loading) {
        redirectToRoot();
      }

      if (!_.isEmpty(error) && !_.isEmpty(error.message) && !loading) {
        message.error(error.message);
      }
    }
  }

  render() {
    return (
      <div className="login-page">
        <Header />
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { auth = {} } = state;

  return {
    login: auth.login,
    loading: auth.loading,
    error: auth.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signInWithEmail: (email, password, callback) => { dispatch(signInWithEmail(email, password, callback)); },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
