import React, { useState } from 'react';
import CardEdit from './CardEdit';

function CardEditList(userInfo) {
  const [mypageCardList, setMypageCardList] = useState(userInfo.userInfo);

  return (
    <div className="cardEdit-list">
      <p className="cardEdit-list-before-message">
        아래 카드에서 바로 수정하고 SUMMIT을 눌러 반영하세요!
      </p>
      {mypageCardList.map((card) => (
        <CardEdit key={card.id} card={card} />
      ))}
    </div>
  );
}

export default CardEditList;
