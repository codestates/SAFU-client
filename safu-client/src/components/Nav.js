//Nav.js - (state에 따라 or 라우팅에 따라) 변경되는 부분: signup, login, mypage, logout 버튼
import React from "react";
import axios from "axios";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

axios.defaults.withCredentials = true;

function Nav(props) {
  // console.log("props :",props);
  // 하위의 li 들은 컴포넌트로 변경예정
  if (props.isLogin) {
    return (
      <div className="navi">
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
      <div className="navi">
        <h2 className="title">S*FU</h2>
        {/* 하위 컴포넌트에 props.handleIsloninChange 를 내려줘야함 */}
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/SignUp">sign up</Link>
            </li>
            <li>
              <Link to="/Login">log in</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/SignUp" component={SignUp}></Route>
            <Route path="/Login" component={Login}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Nav;
