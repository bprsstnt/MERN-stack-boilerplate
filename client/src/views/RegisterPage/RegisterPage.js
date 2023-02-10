import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import {Form, Input, Button} from 'antd';

function RegisterPage() {

  const onFinishHandler = (e) => {
    // @TODO
    if (e.password !== e.confirmPassword) {
      return alert("Password does not match");
    }

    let body = {
      name: e.name,
      email: e.email,
      password: e.password,
    };

    // axios and send request to /api/users/register
    // or 
    // use Redux and call axios from dispatch

    console.debug("on submit handler. ", body);
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