import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import {Form, Input, Button} from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const navigate = useNavigate();

  const onFinishHandler = (e) => {
    if (e.password !== e.confirmPassword) {
      return alert("Password does not match");
    }

    let body = {
      name: e.name,
      email: e.email,
      password: e.password,
    };

    axios.post('api/users/register', body)
      .then((res) => {
        if(res.data.success) {
          navigate("/login");
        } else {
          alert("Faild to register")
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
        <Form name="register" className={'form'} onFinish={onFinishHandler}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input your name.' }]}>
              <Input type="string" autoComplete='true'/>
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email.' }]}>
              <Input type="email" autoComplete='true'/>
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password.' }]}>
              <Input type="password" autoComplete='false'/>
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              rules={[{ required: true, message: 'Please input your password.' }]}>
              <Input type="password" autoComplete='false'/>
            </Form.Item>

            <Button type="default" htmlType="submit">Register</Button>
          </Form>
      </div>
    </div>
  )
}

export default RegisterPage