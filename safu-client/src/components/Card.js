import React from 'react';
//Card.js - state에 따라 or 라우팅에 따라) 변경되는 부분:  x

const Card = ({ card }) => (
  <div className="card-list-entry">
    <ul className={card.bootcampname.name + ' ' + 'card'}>
      <li className="card-title">
        <p className="bootcamp-name">{card.bootcampname.name}</p>
        <a href={card.githublink}>{card.githublink}</a>
        <p className="user-mail">{card.useremail.email}</p>
      </li>
      <li className="level">
        <p>난이도</p>
        <p>{card.level}</p>
      </li>
      <li className="price">
        <p>비용</p>
        <p>{card.price}</p>
      </li>
      <li className="curriculum">
        <p>커리큘럼</p>
        <p>{card.curriculum}</p>
      </li>
      <li className="recommend">
        <p>추천도</p>
        <p>{card.recommend}</p>
      </li>
      <li className="comment">
        <p>한마디</p>
        <p>{card.comment}</p>
      </li>
    </ul>
  </div>
);
export default Card;
