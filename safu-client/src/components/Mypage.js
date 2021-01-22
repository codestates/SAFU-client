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
      url: 'https://www.safu4u.ml/users/read',
    }).then((users) => {
      setUsers(users.data);
      setLoading(false);
    });
  }, []);
  if (loading) return <div>Loading...</div>;
  return (
    <div className="mypage-div">
      <ul className="mypage-ul">
        <li className="mypage-email mypage-li">
          <p>E-mail</p>
          <p>{users[0].email}</p>
        </li>
        <li className="mypage-githubID mypage-li">
          <p>Github ID</p>
          <p>{users[0].githubId}</p>
        </li>
        <li className="mypage-infoEdit mypage-li">
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (!users[0].email) {
                  alert('소셜로그인으로 가입하셨군요?  수정하실 이메일과 Github ID가 없습니다. ');
                } else {
                  props.history.push({
                    pathname: '/Infoedit',
                    userInfo: {
                      email: users[0].email,
                      password: users[0].password,
                      githubId: users[0].githubId,
                    },
                  });
                }
              }}
            >
              개인정보수정
            </button>
          </div>
        </li>
      </ul>
      <ul>
        {users[1] !== undefined ? (
          <CardEditList userInfo={users[1]}></CardEditList>
        ) : (
          <p>
            아직 작성된 카드가 없습니다.<br></br> 후기를 등록해보세요!
          </p>
        )}
      </ul>
      {/* <ul>{users[1] !== undefined ? <CardList userInfo={users[1]}></CardList> : null}</ul> */}
    </div>
  );
}
export default Mypage;
