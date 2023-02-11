import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../_actions/userActions';
import Auth from '../../hoc/auth';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinishHandler = (e) => {
    let body = {
      email: e.email,
      password: e.password,
    };

    dispatch(loginUser(body))
    .payload
    .then(res => {
      if(res.loginSuccess) {
        navigate("/");
      } else {
        console.error("Login faield: ", res);
      }
    })
  }

  return (
    <div>
      <NavBar />
      
      <div className={'wrapper'}>
        <Form name="login" className={'form'} onFinish={onFinishHandler}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: false, message: 'Please input your email.' }]}>
            <Input type="string" autoComplete='true' />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: false, message: 'Please input your password.' }]}>
            <Input type="password" autoComplete='false'/>
          </Form.Item>

          <Button type="default" htmlType="submit">Login</Button>
        </Form>
      </div>
    </div>
  )
}

export default Auth(LoginPage, false);