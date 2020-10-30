import React, { useState } from 'react';
import CardEdit from './CardEdit';

function CardEditList(userInfo) {
  const [mypageCardList, setMypageCardList] = useState(userInfo.userInfo);

  return (
    <div className="cardEdit-list">
      {mypageCardList.map((card) => (
        <CardEdit key={card.id} card={card} />
      ))}
    </div>
  );
}

export default CardEditList;
