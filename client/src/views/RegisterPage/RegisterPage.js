import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import {Form, Input, Button} from 'antd';

function RegisterPage() {

  const onFinishHandler = (e) => {
    // @TODO
    console.debug("on submit handler. ", e);
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
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email.' }]}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password.' }]}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              rules={[{ required: true, message: 'Please input your password.' }]}>
              <Input />
            </Form.Item>

            <Button type="default" htmlType="submit">Register</Button>
          </Form>
      </div>
    </div>
  )
}

export default RegisterPage