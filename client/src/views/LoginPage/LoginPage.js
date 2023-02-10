import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { Form, Input, Button } from 'antd';

function LoginPage() {
  const onFinishHandler = (e) => {
    // @TODO
    let body = {
      email: e.email,
      password: e.password,
    };
    console.debug("on submit handler. ", body);
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