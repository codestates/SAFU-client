//Login.js - state에 따라 or 라우팅에 따라) 변경되는 부분: x
import React from 'react';
import axios from 'axios';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
axios.defaults.withCredentials = true;

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
        console.log('로그인 완료');
        this.setState({ isLoginMessage: true });
      })
      .then(() => {
        window.location = '/';
      })
      .catch((err) => {
        //status가 401이면
        if (err.message === 'Request failed with status code 401') {
          alert('회원 정보를 찾을 수 없습니다. email과 password를 확인해주세요.');
          this.setState({ isLoginMessage: false });
        }
        //그게 아니면 서버에러
      });
  };
  render() {
    return (
      <div className="login-div">
        <ul className="login-box">
          <li>
            <div>email</div>
            <input type="email" onChange={this.handleLoginValue('useremail')}></input>
          </li>
          <li>
            <div>password</div>
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
        <div className="social-login-div">
          <a href={'http://localhost:4000/auth/github'}>Log in with Github</a>
        </div>
        <div className="find-div">
          <ul>
            <button
              onClick={(e) => {
                e.preventDefault();
                this.props.history.push('/Findid');
              }}
            >
              Find Id
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                this.props.history.push('/Findpw');
              }}
            >
              Find PW
            </button>
          </ul>
        </div>
        <div>
          {this.state.isLoginMessage === false ? (
            <div className="go-to-signup-div">
              <span> Not a member yet?</span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  this.props.history.push('/SignUp');
                }}
              >
                Sign up
              </button>
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
export default withRouter(Login);
