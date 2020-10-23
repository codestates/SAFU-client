import React from "react";
//Card.js - state에 따라 or 라우팅에 따라) 변경되는 부분:  x

const Card = ({ card }) => (
  <div className="card-list-entry">
    <div className="card">
      <ul className="title">
        <li>
          <p>{card.bootcampname.name}</p>
          <a href={card.githublink}>{card.githublink}</a>
          <p>{card.useremail.email}</p>
        </li>
      </ul>
      <ul className="level">
        <li>
          <p>난이도</p>
          <p>{card.level}</p>
        </li>
      </ul>
      <ul className="price">
        <li>
          <p>비용</p>
          <p>{card.price}</p>
        </li>
      </ul>
      <ul className="curriculum">
        <li>
          <p>커리큘럼</p>
          <p>{card.curriculum}</p>
        </li>
      </ul>
      <ul className="recommend">
        <li>
          <p>추천도</p>
          <p>{card.recommend}</p>
        </li>
      </ul>
      <ul className="comment">
        <li>
          <p>한마디</p>
          <p>{card.comment}</p>
        </li>
      </ul>
    </div>
  </div>
);
export default Card;
