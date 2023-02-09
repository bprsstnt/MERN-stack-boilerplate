import React, {useState} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { Form, Input, Button } from 'antd';
import "./LoginPage.css";


function LoginPage() {
  const onFinishHandler = (e) => {
    // @TODO
    console.debug("on submit handler. ", e);
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
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: false, message: 'Please input your password.' }]}>
            <Input />
          </Form.Item>

          <Button type="default" htmlType="submit">Login</Button>
        </Form>
      </div>
    </div>
  )
}

export default LoginPage