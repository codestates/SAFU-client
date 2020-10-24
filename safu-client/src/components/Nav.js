//Nav.js - (state에 따라 or 라우팅에 따라) 변경되는 부분: signup, login, mypage, logout 버튼
import React from 'react';
import axios from 'axios';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Mypage from './Mypage';
import Main from './Main';
import Findid from './Findid';
import Findpw from './findPw';
import { render } from 'react-dom';

axios.defaults.withCredentials = true;

class Nav extends React.Component {
  // console.log("props :",props);
  // 하위의 li 들은 컴포넌트로 변경예정
  constructor(props) {
    super(props);
  }

  handleLogoutButton = () => {
    axios({
      method: 'post',
      url: 'http://localhost:4000/users/logout',
    })
      .then((res) => {
        console.log('로그아웃 완료');
      })
      .catch((err) => {
        //500(err)
        console.error(err);
      });
  };

  render() {
    if (this.props.isLogin) {
      return (
        <div className="navi">
          <h2 className="title">S*FU</h2>
          <nav className="routing">
            <BrowserRouter>
              <ul>
                <li>
                  <Link to="/Mypage">my page</Link>
                </li>
                <li>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      {
                        this.handleLogoutButton();
                      }
                    }}
                  >
                    log out
                  </button>
                </li>
              </ul>
              <Switch>
                <Route path="/" exact component={Main}></Route>
                <Route path="/Mypage" component={Mypage}></Route>
              </Switch>
            </BrowserRouter>
          </nav>
        </div>
      );
    } else {
      return (
        <div className="navi">
          <h2 className="title">S*FU</h2>
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
              <Route path="/" exact component={Main}></Route>
              <Route path="/SignUp" component={SignUp}></Route>
              <Route path="/Login" component={Login}></Route>
              <Route path="/Findid" component={Findid}></Route>
              <Route path="/Findpw" component={Findpw}></Route>
            </Switch>
          </BrowserRouter>
        </div>
      );
    }
  }
}

export default Nav;
