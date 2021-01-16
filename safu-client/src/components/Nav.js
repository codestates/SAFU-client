import React from 'react';
import { Link, Route } from 'react-router-dom';
import { SignUp, Login, Main, CardWrite, Mypage, Findid, Findpw, Infoedit } from '../pages';

import axios from 'axios';

axios.defaults.withCredentials = true;

class Nav extends React.Component {
  handleLogoutButton = () => {
    axios({
      method: 'post',
      url: 'https://www.safu4u.ml/users/logout',
    })
      .then(() => {
        window.location = '/';
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    let button;
    if (this.props.isLogin) {
      button = (
        <ul className="nav-ul-login nav-ul">
          <li>
            <Link to="/Mypage">my page</Link>
          </li>
          <li>
            <button
              onClick={(e) => {
                e.preventDefault();
                {
                  alert('로그아웃 하시겠습니까?');
                  this.handleLogoutButton();
                }
              }}
            >
              log out
            </button>
          </li>
        </ul>
      );
    } else {
      button = (
        <ul className="nav-ul">
          <li>
            <Link to="/SignUp">sign up</Link>
          </li>
          <li>
            <Link to="/Login">log in</Link>
          </li>
        </ul>
      );
    }

    return (
      <div className="navi">
        <h2 className="title">
          <a href="/">S*FU</a>
        </h2>
        {button}
        <Route exact path="/" component={Main}></Route>
        <Route path="/SignUp" component={SignUp}></Route>
        <Route path="/Login" component={Login}></Route>
        <Route path="/Findid" component={Findid}></Route>
        <Route path="/Findpw" component={Findpw}></Route>
        <Route path="/Mypage" component={Mypage}></Route>
        <Route path="/Infoedit" component={Infoedit}></Route>
        <Route path="/CardWrite" component={CardWrite}></Route>
      </div>
    );
  }
}

export default Nav;
