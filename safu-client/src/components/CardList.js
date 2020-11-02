import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../pages';

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
          <div className="fontType-logo"></div>
        </div>
      );
    } else {
      return (
        <div className="card-list">
          {this.props.userInfo.map((card) => (
            <Card key={card.id} card={card} />
          ))}
          <div className="fontType-logo"></div>
        </div>
      );
    }
  }
}

export default CardList;
