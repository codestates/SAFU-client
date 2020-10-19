//Login.js - state에 따라 or 라우팅에 따라) 변경되는 부분: x

import React from 'react';
import axios from 'axios';
import { fakeUserData } from './__test__/FakeUsersData';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <span>email</span>
            <input type="email"></input>
          </li>
          <li>
            <span>password</span>
            <input type="password"></input>
          </li>
        </ul>
        <div>
          <button>Log in</button>
        </div>
        <div>
          <button>Log in with Github</button>
        </div>
        <div>
          <button>Find Id</button>
          <button>Find PW</button>
        </div>
        <div>
          <span>회원이 아니신가요?</span> <button>Sign up</button>
        </div>
      </div>
    );
  }
}

export default Login;
