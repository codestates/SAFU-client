import React from 'react';
import './App.css';
import Main from './components/Main';
import Nav from './components/Nav';
import Menu from './components/Menu';
import CardList from './components/CardList';

import axios from 'axios';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
    };

    axios({
      method: 'get',
      url: 'http://localhost:4000/reviews',
    })
      .then((res) => {
        console.log('getReview: ', res.data[1]);
        if (res.data[1]) {
          this.setState({ isLogin: true });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    console.log('App.js this.state:', this.state);
    return (
      <div>
        <div>
          {/* Nav component */}
          <Nav isLogin={this.state.isLogin} />
        </div>
      </div>
    );
  }
}

export default App;
