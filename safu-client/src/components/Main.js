import React from 'react';
import '../App.css';
import Menu from './Menu';
import CardList from './CardList';

import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      userInfo: [],
    };

    axios({
      method: 'get',
      url: 'http://localhost:4000/reviews',
    })
      .then((res) => {
        console.log('getReview: ', res.data[1]);
        if (res.data[1].isLogin === true) {
          this.setState({ userInfo: res.data[0], isLogin: true });
        } else {
          this.setState({ userInfo: res.data });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleIsLoginChange() {
    this.setState({ isLogin: true });
  }

  render() {
    console.log('Main.js this.state:', this.state);
    return (
      <div>
        {/* main component */}
        <div className="main-body">
          <Menu />
          <CardList isLogin={this.state.isLogin} userInfo={this.state.userInfo} />
        </div>
      </div>
    );
  }
}

export default App;
