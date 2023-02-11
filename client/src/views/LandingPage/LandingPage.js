import React, { useEffect, useState } from 'react'
import axios from 'axios';
import NavBar from "../../components/NavBar/NavBar";
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authUser } from '../../_actions/userActions';
import Auth from '../../hoc/auth';
import "./LandingPage.css";

function LandingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('there');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {

    dispatch(authUser())
    .payload 
    .then(res => {
      if(!res.error) {
        setName(res.name);
        setIsActive(true);
      }
    })
  }, [isActive, dispatch])
  
  
  const onClickLogoutHandler = () => {
    axios.get('api/users/logout')
    .then((res) => {
      if(res.data.success) {
        setName('there');
        setIsActive(false);
        navigate("/login");
      } else {
        console.error("faild to logout");
      }
    })
  }

  return (
    <div>
      <NavBar />
      <div className={"wrapper"}>
        <h2>👋 Hi, {name}.</h2>
        {isActive && (
          <Button danger onClick={onClickLogoutHandler}>Logout</Button>
        )}
      </div>
    </div>
  )
}

export default Auth(LandingPage, null);