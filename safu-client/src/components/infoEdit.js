import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
axios.defaults.withCredentials = true;

const crypto = require('crypto');

const hash = function (password) {
  return crypto.createHash('sha512').update(password).digest('hex');
};

class Infoedit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      useremail: this.props.history.location.userInfo.email,
      password: this.props.history.location.userInfo.password,
      passwordCheck: this.props.history.location.userInfo.password,
      githubId: this.props.history.location.userInfo.githubId,
      isAvailedPassword: '',
      isAvailedPasswordCheck: '',
    };
  }

  handleInfoEditValue = (key) => (e) => {
    if (key === 'password') {
      var reg = /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
      var password = e.target.value;
      if (password.length > 0 && false === reg.test(password)) {
        this.setState({
          isAvailedPassword: '비밀번호는 8자 이상이어야 하며, 숫자/소문자를 모두 포함해야 합니다.',
        });
      } else if (hash(password) === this.state.passwordCheck) {
        this.setState({ isAvailedPassword: '이전 비밀번호와 동일합니다.' });
      } else {
        this.setState({ isAvailedPassword: '' });
        this.setState({ [key]: hash(e.target.value) });
      }
    }
    if (key === 'passwordCheck') {
      var passwordCheck = hash(e.target.value);
      if (passwordCheck.length > 0 && this.state.password !== passwordCheck) {
        this.setState({ isAvailedPasswordCheck: '비밀번호가 일치하지 않습니다.' });
      } else {
        this.setState({ isAvailedPasswordCheck: '' });
        this.setState({ [key]: passwordCheck });
      }
    }
    if (key === 'githubId') {
      this.setState({ [key]: e.target.value });
    }
  };

  handleInfoEditButton = () => {
    if (this.state.isAvailedPassword === '' && this.state.isAvailedPasswordCheck === '') {
      axios({
        method: 'put',
        url: 'https://www.safu4u.ml/users/edit',
        data: {
          useremail: this.state.useremail,
          password: this.state.password,
          githubId: this.state.githubId,
        },
      })
        .then((res) => {
          window.location = '/Login';
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      alert('수정할 것이 없습니다.');
    }
  };

  handleDeactivateButton = () => {
    axios({
      method: 'delete',
      url: 'https://www.safu4u.ml/users/edit/delete',
    })
      .then((res) => {
        alert('안전하게 탈퇴처리되었습니다.');
        window.location = '/';
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <div className="signup-div">
        <ul className="signup-box">
          <li className="email-box">
            <label htmlFor="useremail">
              <div>email</div>
              <div>{this.state.useremail}</div>
            </label>
          </li>
          <li className="password-box">
            <label htmlFor="password">
              <div>password</div>
              <input type="password" onChange={this.handleInfoEditValue('password')}></input>
              <div>{this.state.isAvailedPassword}</div>
            </label>
          </li>
          <li className="password-chck-box">
            <label htmlFor="password check">
              <div>verify password</div>
              <input type="password" onChange={this.handleInfoEditValue('passwordCheck')}></input>
              <div>{this.state.isAvailedPasswordCheck}</div>
            </label>
          </li>
          <li className="github-id-box">
            <label htmlFor="Github ID">
              <div>Github ID (for identification)</div>
              <input onChange={this.handleInfoEditValue('githubId')}></input>
            </label>
          </li>
        </ul>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              {
                this.handleInfoEditButton();
              }
            }}
          >
            Confirm
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              {
                alert('회원을 탈퇴하시겠습니까?');
                this.handleDeactivateButton();
              }
            }}
          >
            Deactivate
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Infoedit);
