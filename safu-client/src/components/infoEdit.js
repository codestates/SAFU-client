import React from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;

class Infoedit extends React.Component {
  constructor(props) {
    super(props);
    // const userInfo = props.history.location.userInfo;

    // console.log('EdituserInfo: ', props.history.location.userInfo);
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
      } else if (password === this.state.passwordCheck) {
        console.log('password: ', password);
        this.setState({ isAvailedPassword: '이전 비밀번호와 동일합니다.' });
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
  handleInfoEditButton = () => {
    if (this.state.isAvailedPassword === '' && this.state.isAvailedPasswordCheck === '') {
      axios({
        method: 'post',
        url: 'http://localhost:4000/users/signup', //회원가입 API로도 잘 작동합니다. 다만 있던 회원정보는 그대로 있고, 새로운 히원정보가 생기는 것과 마찬가지가 됩니다. 즉, 비번을 여기서 수정해줬더라도 예전 비밀번호로도 로그인이 되게 됩니다.
        data: {
          useremail: this.state.useremail,
          password: this.state.password,
          githubId: this.state.githubId,
        },
      })
        .then((res) => {
          window.location = '/Login';
          console.log('개인정보수정 완료');
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
      url: 'http://localhost:4000/users/edit/delete',
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
export default Infoedit;
