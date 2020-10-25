//Menu.js - (state에 따라 or 라우팅에 따라) 변경되는 부분: x
import React from 'react';
import safuLogo from '../images/safu_logo.png';
// import codestates from "../images/codestates.png";
// import fastcampus from "../images/fastcampus.png";
// import vanillacoding from "../images/vanillacoding.png";

function Menu() {
  return (
    <div className="menu-body">
      <div className="logo">
        <a href="/">
          <img src={safuLogo} width="120px" height="120px" />
        </a>
        <p>당신에게 가장 잘 맞는 부트캠프는 어디일까요?</p>
      </div>
      <div className="bootcamp-list">
        <button id="select-all">show all</button>
        {/* <img src={codestates} /> */}
        <button id="select-codestates">code states</button>
        {/* <img src={codestates} /> */}
        <button id="select-fastcampus">fast campus</button>
        {/* <img src={fastcampus} /> */}
        <button id="select-vanillacoding">vanilla coding</button>
        {/* <img src={vanillacoding} /> */}
      </div>
    </div>
  );
}

export default Menu;
