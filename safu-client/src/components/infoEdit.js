//infoEdit.js - state에 따라 or 라우팅에 따라) 변경되는 부분: x

import React from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

class Infoedit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('infoEdit');
    return (
      <div>
        <h1>infoEdit</h1>
      </div>
    );
  }
}

export default Infoedit;
