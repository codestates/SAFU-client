//Signup.js - state에 따라 or 라우팅에 따라) 변경되는 부분: x
import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { fakeUsersData } from './__test__/fakeUsersData';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordCheck: '',
      githubId: '',

      isAvailedEmail: '',
      isAvailedPassword: '',
      isAvailedPasswordCheck: '',
    };
  }
  handleSignUpValue = (key) => (e) => {
    if (key === 'email') {
      var emailreg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      var email = e.target.value;
      if (email.length > 0 && false === emailreg.test(email)) {
        this.setState({ isAvailedEmail: '올바른 이메일 형식이 아닙니다.' });
      } else {
        for (let userInfo of fakeUsersData) {
          console.log(userInfo);
          if (userInfo.email === email) {
            console.log(userInfo.email);
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
      url: 'http://localhost/user/signup',
      data: {
        email: this.state.email,
        password: this.state.password,
        githubId: this.state.githubId,
      },
    })
      .then((res) => {
        //200(OK), 201(Created)
        console.log('SignUp res: ', res);
        //history.pushState('/reviews');
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
            <label htmlFor="email">
              email
              <input type="email" onChange={this.handleSignUpValue('email').bind(this)}></input>
              <div>{this.state.isAvailedEmail}</div>
            </label>
          </li>
          <li>
            <label htmlFor="password">
              pw
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
              pw 확인
              <input type="password"></input>
              <div>{this.state.isAvailedPasswordCheck}</div>
            </label>
          </li>
          <li>
            <label htmlFor="Github ID" onChange={this.handleSignUpValue('githubId').bind(this)}>
              Github ID
              <input></input>
            </label>
          </li>
        </ul>
        {/* <button onClick={this.handleLoginButton().bind(this)}>제출하기</button> */}
        <button
          onClick={(e) => {
            // console.log(this.state);
            e.preventDefault();
            this.handleLoginButton.bind(this);
          }}
        >
          제출하기
        </button>
      </div>
    );
  }
}

// export default withRouter(SignUp);
export default SignUp;
