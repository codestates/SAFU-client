//Signup.js - state에 따라 or 라우팅에 따라) 변경되는 부분: x

import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { fakeUsersData } from '../__test__/fakeUsersData';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useremail: '',
      password: '',
      passwordCheck: '',
      githubId: '',
      isAvailedEmail: '',
      isAvailedPassword: '',
      isAvailedPasswordCheck: '',
    };
  }
  handleSignUpValue = (key) => (e) => {
    if (key === 'useremail') {
      var emailreg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      var useremail = e.target.value;
      if (useremail.length > 0 && false === emailreg.test(useremail)) {
        this.setState({ isAvailedEmail: '올바른 이메일 형식이 아닙니다.' });
      } else {
        for (let userInfo of fakeUsersData) {
          if (userInfo.useremail === useremail) {
            this.setState({ isAvailedEmail: '이미 존재하는 email입니다.' });
            break;
          } else {
            this.setState({ isAvailedEmail: '' });
            this.setState({ [key]: e.target.value });
          }
        }
      }
    }
    if (key === 'password') {
      var reg = /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
      var password = e.target.value;
      if (password.length > 0 && false === reg.test(password)) {
        this.setState({
          isAvailedPassword: '비밀번호는 8자 이상이어야 하며, 숫자/소문자를 모두 포함해야 합니다.',
        });
      } else {
        this.setState({ isAvailedPassword: '' });
        this.setState({ [key]: e.target.value });
      }
    }
    if (key === 'passwordCheck') {
      var passwordCheck = e.target.value;
      if (passwordCheck.length > 0 && this.state.password !== passwordCheck) {
        this.setState({ isAvailedPasswordCheck: '비밀번호가 일치하지 않습니다.' });
      } else {
        this.setState({ isAvailedPasswordCheck: '' });
        this.setState({ [key]: e.target.value });
      }
    }
    if (key === 'githubId') {
      this.setState({ [key]: e.target.value });
    }
  };
  handleLoginButton = () => {
    axios({
      method: 'post',
      url: 'http://localhost:4000/users/signup',
      data: {
        useremail: this.state.useremail,
        password: this.state.password,
        githubId: this.state.githubId,
      },
    })
      .then((res) => {
        //200(OK), 201(Created)
        this.props.history.push('/users/login');
      })
      .catch((err) => {
        //500(err)
        console.error(err);
      });
  };
  render() {
    const { history } = this.props;
    return (
      <div>
        <ul>
          <li>
            <label htmlFor="useremail">
              <div>email</div>
              <input
                type="useremail"
                onChange={this.handleSignUpValue('useremail').bind(this)}
              ></input>
              <div>{this.state.isAvailedEmail}</div>
            </label>
          </li>
          <li>
            <label htmlFor="password">
              <div>password</div>
              <input
                type="password"
                onChange={this.handleSignUpValue('password').bind(this)}
              ></input>
              <div>{this.state.isAvailedPassword}</div>
            </label>
          </li>
          <li>
            <label
              htmlFor="password check"
              onChange={this.handleSignUpValue('passwordCheck').bind(this)}
            >
              <div>password 확인</div>
              <input type="password"></input>
              <div>{this.state.isAvailedPasswordCheck}</div>
            </label>
          </li>
          <li>
            <label htmlFor="Github ID" onChange={this.handleSignUpValue('githubId').bind(this)}>
              <div>Github ID (for identification)</div>
              <input></input>
            </label>
          </li>
        </ul>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              this.handleLoginButton.bind(this);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

// export default withRouter(SignUp);
export default SignUp;
