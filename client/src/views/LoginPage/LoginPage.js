import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import axios from 'axios';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const onFinishHandler = (e) => {
    let body = {
      email: e.email,
      password: e.password,
    };
    
    axios.post('api/users/login', body)
    .then((res) => {
      if(res.data.loginSuccess) {
        navigate("/");
      } else {
        return alert(res.data.message);
      }
    })
    .catch((err) => {
      console.error(err);
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

export default LoginPage