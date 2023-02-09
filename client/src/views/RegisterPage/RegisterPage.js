import React, {useState} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import "./RegisterPage.css";
import {Button} from 'antd';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onChangeNameHandler = (e) => {
    setName(e.currentTarget.value);
  }

  const onChangeEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  }

  const onChangePasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  }

  const onChangeConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.currentTarget.value);
  }

  return (
    <div>
      <NavBar />

      <div className={'wrapper'}>
        <form className={'form'}>
          <label>Name</label>
          <input type="string" value={name} onChange={onChangeNameHandler} />

          <label>Email</label>
          <input type="email" value={email} onChange={onChangeEmailHandler} />
          
          <label>Password</label>
          <input type="password" value={password} onChange={onChangePasswordHandler} />

          <label>Confirm Password</label>
          <input type="password" value={confirmPassword} onChange={onChangeConfirmPasswordHandler} />

          <br />

          <Button>Register</Button>

        </form>
      </div>
    </div>
  )
}

export default RegisterPage