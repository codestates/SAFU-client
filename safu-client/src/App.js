import React from 'react';
import './App.css';
import Nav from './components/Nav';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

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
        if (res.data[1] !== undefined && res.data[1].isLogin === true) {
          this.setState({ isLogin: true });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <div>
        <div>
          <BrowserRouter>
            <Nav isLogin={this.state.isLogin} />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
export default App;
