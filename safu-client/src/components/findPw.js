import React from 'react';
import axios from 'axios';

class Findpw extends React.Component {
  constructor(props) {
    super(props);
    this.useremail = '';
    this.githubId = '';
  }

  handleFindPwValue = (key) => (e) => {
    if (key === 'useremail') {
      this.useremail = e.target.value;
    } else if (key === 'githubId') {
      this.githubId = e.target.value;
    }
  };

  handleFindPwButton = () => {
    axios({
      method: 'post',
      url: 'http://localhost:4000/users/login/findpw',
      data: {
        useremail: this.useremail,
        githubId: this.githubId,
      },
    })
      .then((res) => {
        if (res.data !== null) {
          alert('password를 회원님의 이메일로 전송하였습니다. 로그인 페이지로 이동 하시겠습니까?');
          this.props.history.push('/Login');
        } else {
          alert(
            '회원 정보가 존재하지 않습니다. email과 Github Id를 확인해주세요. 혹시 회원이 아니신가요?',
          );
        }
      })
      .catch((err) => {
        if (err.message === 'Request failed with status code 400') {
          alert('올바른 email과 Github Id를 입력해주세요.');
        }
      });
  };

  render() {
    return (
      <div>
        <ul>
          <li>
            <div>Email</div>
            <input onChange={this.handleFindPwValue('useremail')}></input>
          </li>
          <li>
            <div>Github ID</div>
            <input onChange={this.handleFindPwValue('githubId')}></input>
          </li>
        </ul>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              {
                this.handleFindPwButton();
              }
            }}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Findpw;
