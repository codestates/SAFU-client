//findId.js - state에 따라 or 라우팅에 따라) 변경되는 부분: x
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
    // console.log(this.githubId);
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
        //status 200
        if (res.data !== null) {
          alert('회원님의 email은 ' + res.data + ' 입니다. 로그인 페이지로 이동하시겠습니까?'); // alert부분, API 구현 완료시 modal창으로 바꿀 것임.
          //확인 버튼을 누르면,
          // this.props.history.push('/login');
          window.location = '/Login';
        } else {
          alert('회원 정보가 존재하지 않습니다.');
        }
      })
      .catch((err) => {
        //status 400 Bad request
        if (err.message === 'Request failed with status code 400') {
          alert('올바른 Github 메세지를 입력해주세요');
        } else {
          //status 500
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
