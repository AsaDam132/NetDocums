import React from "react";
import { Routes, Route, Link,Redirect } from "react-router-dom";

function Navbar() {
  const handleRedirect = (e, name) => {
    e.preventDefault()
    // navigate(`${name}`)
    // <Redirect to=`${name}` />
    window.location.href = `${name}`
  }
  return (
    <div>
      <React.Fragment>
        <header className="doc-header">
          <div className="logoWrap">
            <a href="./">
              <img
                className="logo-dark logo-img"
                src="https://www.netappsng.com/logo.png"
                alt="logo"
              />
            </a>
          </div>
          <a href="#" className="nav-trigger">
            <i className="fa fa-navicon"></i>
          </a>
          <ul className="main-nav">
            <li className="active"   onClick={(e) => handleRedirect(e, "/")}>
       
            
                <h2>Home</h2>
              
            </li>
            <li>
              
           
          
                <h2     
                onClick={(e) => handleRedirect(e, "/live")}>Api Keys and Webhook</h2>
              
            </li>
            <li>
          
          
                <h2 onClick={(e) => handleRedirect(e, "/invite")}>Team invites</h2>
              
            </li>
            <li>
            
                <h2 onClick={(e) => handleRedirect(e, "/settlement")}>Settlement</h2>
              
            </li>
          </ul>
        </header>
      </React.Fragment>
    </div>
  );
}

export default Navbar;
