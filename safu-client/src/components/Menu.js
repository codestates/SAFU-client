//Menu.js - (state에 따라 or 라우팅에 따라) 변경되는 부분: x
import React, { useState, useEffect } from 'react';
import safuLogo from '../images/safu_logo.png';
import axios from 'axios';

// axios.defaults.withCredentials = true;

function Menu() {
  const [checkAll, setCheckAll] = useState(true);
  const [bootcampList, setBootcampList] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:4000/bootcamplists',
    }).then((users) => {
      setBootcampList(users.data);
    });
  }, []);

  console.log();
  return (
    <div className="menu-body">
      <div className="logo">
        <a href="/">
          <img src={safuLogo} width="120px" height="120px" />
        </a>
        <p>당신에게 가장 잘 맞는 부트캠프는 어디일까요?</p>
      </div>
      <div className="bootcamp-list">
        <div className="select-all-div">
          {checkAll === true ? (
            <label className=" selected select-all">
              <input
                type="checkbox"
                className="select-all"
                id="select-all"
                name="select-all"
                value="select-all"
              ></input>
              Select All
            </label>
          ) : (
            <label className="select-all">
              <input
                type="checkbox"
                className="select-all"
                id="select-all"
                name="select-all"
                value="select-all"
              ></input>
              Select All
            </label>
          )}
        </div>
        <div className="bootcamp-list-slide-box">
          {bootcampList.map((bootcamp) => (
            <div className="bootcamp-div">
              <label for={bootcamp.id}>
                <input
                  type="checkbox"
                  className="bootcamp-name"
                  id={bootcamp.id}
                  name={bootcamp.name}
                  value={bootcamp.name}
                ></input>
                {bootcamp.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
