import React from 'react'
import NavBar from "../../components/NavBar/NavBar";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div>
      <NavBar />
      <div className={"wrapper"}>
        <h2>👋 Hi, there.</h2>
      </div>
    </div>
  )
}

export default LandingPage