//Nav.js - (state에 따라 or 라우팅에 따라) 변경되는 부분: signup, login, mypage, logout 버튼
import React from "react";
import axios from "axios";
import Login from "./Login";
import Signup from "./SignUp";

axios.defaults.withCredentials = true;

function Nav(isLogin) {
  if (isLogin.isLogin) {
    return (
      <div>
        <h2 className="title">S*FU</h2>
        <ul>
          <li>
            <a href="">my page</a>
          </li>
          <li>
            <a href="">log out</a>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h2 className="title">S*FU</h2>
        <ul>
          <li>
            <a href="">sign up</a>
          </li>
          <li>
            <a href="">log in</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
