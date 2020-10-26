//Mypage.js - 로그인 후 Nav 바의 Mypage를 누르면 이 <Mypaage>컴포넌트에서 개인정보 열람과 수정,
// 자신이 작성한 <CardList>가 나타난다.

import React from 'react';
import axios from 'axios';
import CardList from './CardList';

class Mypage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userInfo: [],
    };
    axios({
      method: 'get',
      url: 'http://localhost:4000/users/read',
    })
      .then((res) => {
        if (res.data[1] !== undefined && res.data[1].isLogin === true) {
          this.setState({ userInfo: res.data[0], isLogin: true });
        } else {
          this.setState({ userInfo: res.data });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <div>
        {/* <h2>My Page</h2> */}
        <ul>
          <li>
            <p>E-mail</p>
            {/* <p>{userInfo.useremail.email}</p>  API로 받아오면 주석 풀기*/}
          </li>
          <li>
            <p>Github ID</p>
            {/* <p>{userInfo.githubId}</p>  API로 받아오면 주석 풀기*/}
          </li>
          <li>
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  this.props.history.push({
                    pathname: '/Infoedit',
                    userInfo: {
                      email: 'hjhjhj@naver.com', //여기를 {userInfo.useremail.email} 로 넣어줘야함.
                      password: 'hjhjhj5414', //여기를 {userInfo.password} 로 넣어줘야함.
                      githubId: 'hjhjhj', //여기를 {userInfo.githubId} 로 넣어줘야함.
                    },
                  });
                }}
              >
                개인정보수정
              </button>
            </div>
          </li>
        </ul>
        <div>
          <p>카드를 클릭해서 후기를 수정할 수 있습니다.</p>
          <CardList isLogin={this.state.isLogin} userInfo={this.state.userInfo}></CardList>
          {/* server에서 이것도 getReviews와 같은 형식으로 [[{},{},{}], {isLogin:}] 과 같은 형식으로 보내준다면 
          CardList 논의 필요 : isLogin을 true로 해놓으면 mypage에서도 +버튼 나옴, 그러면 문구를 
          '새로운 후기를 등록하거나 카드를 클릭해서 후기를 수정할 수 있습니다. '
          라고 바꾸어야하고, 
          isLogin을 강제로 this.state에서 false로 넣고, 21번째 줄에서 isLogin:true 해주는 것을 없애면
          +버튼이 보이지 않아서 등록기능은 없고 수정만 가능해짐. 
          논의사항
          1. server에서 Get myPage 응답으로 어떤 형식을 보내주실건지
          2. + 버튼을 있게 할건지 / 없게 할 건지 
          */}
        </div>
      </div>
    );
  }
}
export default Mypage;
