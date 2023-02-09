import React, {useState} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { Button } from 'antd';
import "./LoginPage.css";


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  }

  const onChangePasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  }

  const onSubmitHandler = (e) => {
    // @TODO
    console.log("on submit handler");
  }

  return (
    <div>
      <NavBar />
      
      <div className={'wrapper'}>
        <form className={'form'} onSubmit={onSubmitHandler}>
          <label>Email</label>
          <input type="email" value={email} onChange={onChangeEmailHandler} />
          
          <label>Password</label>
          <input type="password" value={password} onChange={onChangePasswordHandler} />

          <br />

          <Button>Login</Button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage