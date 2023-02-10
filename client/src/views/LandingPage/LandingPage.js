import { Button } from 'antd';
import axios from 'axios';
import React from 'react'
import NavBar from "../../components/NavBar/NavBar";
import { useNavigate } from 'react-router-dom';
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  const onClickLogoutHandler = () => {
    axios.get('api/users/logout')
    .then((res) => {
      if(res.data.success) {
        navigate("/login")
      } else {
        console.error("faild to logout");
      }
    })
  }

  return (
    <div>
      <NavBar />
      <div className={"wrapper"}>
        <h2>👋 Hi, there.</h2>
        <Button danger onClick={onClickLogoutHandler}>Logout</Button>
      </div>
    </div>
  )
}

export default LandingPage