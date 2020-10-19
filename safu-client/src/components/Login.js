//Login.js - state에 따라 or 라우팅에 따라) 변경되는 부분: x

import React from 'react';
import axios from 'axios';
import { fakeUsersData } from './__test__/FakeUsersData';

const safuID = process.env.GITHUB_CLIENT_ID; //등록 후 결정
const safuSecret = process.env.GITHUB_CLIENT_SECRET; // 등록 후 결정
const redirectUri = 'http://localhost'; //등록 후 결정

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useremail: '',
      password: '',
    };
  }

  handleLoginValue = (key) => (e) => {
    //입력 값으로 state변경 이벤트
    this.setState({ [key]: e.target.value });
  };

  handleLoginButton = () => {
    //axios post 요청 이벤트
    axios({
      method: 'post',
      url: 'http://localhost/user/login',
      data: {
        useremail: this.state.useremail,
        password: this.state.password,
      },
    })
      .then((res) => {
        //status 가 200이면,
        // logged main page로 redirect
        // App.js의 isLogin state를 state끌어올리기로 변경해주고나서,
        // history.pushState('/reviews')
      })
      .catch((err) => {
        // if(  ){
        //status가 401이면 unauthorized error
        //'That account doesn't existt. Enter a different account or get a new one'띄위기
        // }
        // else{
        //status code가 500이면 server error
        // }
      });
  };

  render() {
    return (
      <div>
        <ul>
          <li>
            <span>email</span>
            <input type="email" onChange={this.handleLoginValue('useremail').bind(this)}></input>
          </li>
          <li>
            <span>password</span>
            <input type="password" onChange={this.handleLoginValue('password').bind(this)}></input>
          </li>
        </ul>
        <div>
          <button>Log in</button>
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
          <span>회원이 아니신가요?</span> <button>Sign up</button>
        </div>
      </div>
    );
  }
}

export default Login;
