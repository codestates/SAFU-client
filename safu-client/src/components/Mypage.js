//Mypage.js - 로그인 후 Nav 바의 Mypage를 누르면 이 <Mypaage>컴포넌트에서 개인정보 열람과 수정,
// 자신이 작성한 <CardList>가 나타난다.
import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import CardList from './CardList';
import CardEditList from './CardEditList';

function Mypage(props) {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:4000/users/read',
    }).then((users) => {
      console.log('mypage 정보 받아와!', users.data);
      setUsers(users.data);
      setLoading(false);
    });
  }, []);
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <ul>
        <li>
          {console.log('users', users[0])}
          <p>E-mail</p>
          <p>{users[0].email}</p>
        </li>
        <li>
          <p>Github ID</p>
          <p>{users[0].githubId}</p>
        </li>
        <li>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                props.history.push({
                  pathname: '/Infoedit',
                  userInfo: {
                    email: users[0].email,
                    password: users[0].password,
                    githubId: users[0].githubId,
                  },
                });
              }}
            >
              개인정보수정
            </button>
          </div>
        </li>
      </ul>
      <ul>{users[1] !== undefined ? <CardEditList userInfo={users[1]}></CardEditList> : null}</ul>
      {/* <ul>{users[1] !== undefined ? <CardList userInfo={users[1]}></CardList> : null}</ul> */}
    </div>
  );
}
export default Mypage;
