import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Findid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.githubId = '';
  }

  handleFindIdValue = () => (e) => {
    this.githubId = e.target.value;
  };

  handleFindIdButton = () => {
    axios({
      method: 'post',
      url: 'http://localhost:4000/users/login/findId',
      data: {
        githubId: this.githubId,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data !== null) {
          if (res.data === 'social') {
            alert(
              '소셜로그인으로 가입하셨군요? 아이디찾기 기능을 사용할 수 없습니다. 로그인 페이지로 이동하시겠습니까?',
            );
            this.props.history.push('/Login');
          } else {
            alert('회원님의 email은 ' + res.data + ' 입니다. 로그인 페이지로 이동하시겠습니까?');
            this.props.history.push('/Login');
          }
        } else {
          alert('회원 정보가 존재하지 않습니다.');
        }
      })
      .catch((err) => {
        if (err.message === 'Request failed with status code 400') {
          alert('올바른 Github 메세지를 입력해주세요');
        } else {
          console.error(err);
        }
      });
  };
  render() {
    return (
      <div className="findId-div">
        <ul className="findId-box">
          <li>
            <div>Github ID</div>
            <input onChange={this.handleFindIdValue()}></input>
          </li>
        </ul>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              {
                this.handleFindIdButton();
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
export default withRouter(Findid);
