//Signup.js - state에 따라 or 라우팅에 따라) 변경되는 부분: x
import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordCheck: '',
      githubId: '',
    };
  }
  handleSignUpValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleLoginButton = () => {
    // 제출하기(회원가입) 버튼을 누르면 이 event가 발생
    // 이 버튼은 서버에 회원가입을 요청 후 로그인 페이지로 리다이렉트 해줌
    // 이미 회원가입이 되어 있는 경우, email 유효성 검사에서 걸러지므로 따로 확인 필요없음.
    // axios 공식문서 https://xn--xy1bk56a.run/axios/guide/api.html#%EA%B5%AC%EC%84%B1-%EC%98%B5%EC%85%98 에서 //post 요청 전송 을 참고
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
        // history.pushState('/main');
      })
      .catch((err) => {
        //500(err)
        // console.error(err);
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
            </label>
          </li>
          <li>
            <label htmlFor="password">
              pw
              <input
                type="password"
                onChange={this.handleSignUpValue('password').bind(this)}
              ></input>
            </label>
          </li>
          <li>
            <label
              htmlFor="password check"
              onChange={this.handleSignUpValue('passwordCheck').bind(this)}
            >
              pw 확인
              <input type="password"></input>
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
