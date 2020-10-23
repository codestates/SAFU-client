"react district";
import React from "react";
import Card from "./Card";
import plus from "../images/plus.png";

//CardList.js - (state에 따라 or 라우팅에 따라) 변경되는 부분:
//  1. 비로그인시 main => 메뉴에서 특정 bootcamp click시 랜더링 되는 Card 컴포넌트들
//  2. 로그인지 main => + 버튼(누르면 CardWrite 컴포넌트가 있는 페이지로 감)추가로 랜더링 되고 Card 컴포넌트들이 이어서 랜더링
//  3. Mypage => 자신이 쓴 Card 컴포넌트들만 랜더링

function CardList(props) {
  // console.log("props :", props);
  const isLogin = props.isLogin;
  const cardData = props.userInfo;
  // console.log("cardData :", cardData);
  // console.log("isLogin : ", isLogin);
  if (isLogin) {
    return (
      <div className="card-list">
        <div className="add-card-div">
          <img className="add-card-plus" src={plus} width="60px" height="60px" />
        </div>
        {cardData.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="card-list">
        {cardData.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    );
  }
}

export default CardList;
