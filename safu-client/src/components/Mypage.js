//Mypage.js - 로그인 후 Nav 바의 Mypage를 누르면 이 <Mypaage>컴포넌트에서 개인정보 열람과 수정,
// 자신이 작성한 <CardList>가 나타난다.

import React from 'react';
import axios from 'axios';
import CardList from './CardList';

class Mypage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>My Page</h2>
        <ul>
          <li>
            <p>E-mail</p>
            {/* <p>{userInfo.email}</p>  API로 받아오면 주석 풀기*/}
          </li>
          <li>
            <p>Github ID</p>
            {/* <p>{userInfo.githubId}</p>  API로 받아오면 주석 풀기*/}
          </li>
          <li>
            <div>
              <button>개인정보수정</button>
            </div>
          </li>
        </ul>
        <div>
          <p>카드를 클릭해서 후기를 수정할 수 있습니다.</p>
          {/* <CardList></CardList> 상현님 CardList랑 합쳐지면 주석 풀기*/}
        </div>
      </div>
    );
  }
}
export default Mypage;
