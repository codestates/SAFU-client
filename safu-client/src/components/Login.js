//Login.js - state에 따라 or 라우팅에 따라) 변경되는 부분: x

import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const safuID = process.env.GITHUB_CLIENT_ID; //등록 후 결정
const safuSecret = process.env.GITHUB_CLIENT_SECRET; // 등록 후 결정
const redirectUri = 'http://localhost'; //등록 후 결정

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useremail: '',
      password: '',
      isLoginMessage: false,
    };
  }

  handleLoginValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleLoginButton = () => {
    axios({
      method: 'post',
      url: 'http://localhost:4000/users/login',
      data: {
        useremail: this.state.useremail,
        password: this.state.password,
      },
    })
      .then((res) => {
        //status 가 200이면,
        this.setState({ isLoginMessage: true });
        // logged main page로 redirect
        // App.js의 isLogin state를 state끌어올리기로 변경해주고나서,
        // this.props.history.push('/reviews')
      })
      .catch((err) => {
        //status가 401이면
        if (err.message === 'Request failed with status code 401') {
          this.setState({ isLoginMessage: false });
        }
        //그게 아니면 서버에러
      });
  };

  render() {
    return (
      <div>
        <ul>
          <li>
            <span>email</span>
            <input type="email" onChange={this.handleLoginValue('useremail')}></input>
          </li>
          <li>
            <span>password</span>
            <input type="password" onChange={this.handleLoginValue('password')}></input>
          </li>
        </ul>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              {
                this.handleLoginButton();
              }
            }}
          >
            Log in
          </button>
        </div>
        <div>
          <a
            href={
              'https://github.com/login/oauth/authorize?client_id=' +
              safuID +
              '&redirect_uri=' +
              redirectUri
            }
          >
            Log in with Github
          </a>
        </div>
        <div>
          <button>Find Id</button>
          <button>Find PW</button>
        </div>
        <div>
          {this.state.isLoginMessage === false ? (
            <div>
              <span> 회원이 아니신가요?</span>
              <button>Sign up</button>
            </div>
          ) : (
            <div>
              <span> 로그인 되었습니다 !</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Login;
