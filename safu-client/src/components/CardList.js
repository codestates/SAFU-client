import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import { CardWrite, Card } from '../pages';

//CardList.js - (state에 따라 or 라우팅에 따라) 변경되는 부분:
//  1. 비로그인시 main => 메뉴에서 특정 bootcamp click시 랜더링 되는 Card 컴포넌트들
//  2. 로그인지 main => + 버튼(누르면 CardWrite 컴포넌트가 있는 페이지로 감)추가로 랜더링 되고 Card 컴포넌트들이 이어서 랜더링
//  3. Mypage => 자신이 쓴 Card 컴포넌트들만 랜더링

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardWriteClick: false,
    };
    this.handleCardWriteModal = this.handleCardWriteModal.bind(this);
  }

  handleCardWriteModal() {
    this.setState({ cardWriteClick: true });
  }
  // className={this.state.cardWriteClick === true ? 'card-list modal-open' : 'card-list'}
  render() {
    if (this.props.isLogin) {
      return (
        <div className="card-list">
          <div
            className={
              this.state.cardWriteClick === true ? 'add-card-box modal-open' : 'add-card-box'
            }
          >
            <div className="add-card-div">
              <Link to="/CardWrite">
                <button
                  className={
                    this.state.cardWriteClick === true
                      ? 'add-card-plus modal-open'
                      : 'add-card-plus'
                  }
                  onClick={this.handleCardWriteModal}
                >
                  +
                </button>
              </Link>
            </div>
          </div>
          {this.props.userInfo.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      );
    } else {
      return (
        <div className="card-list">
          {this.props.userInfo.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      );
    }
  }
}

export default CardList;
