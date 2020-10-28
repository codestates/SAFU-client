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
      modeChange: false,
    };
    this.handleModeChange = this.handleModeChange.bind(this);
    axios({
      method: 'get',
      url: 'http://localhost:4000/reviews',
    })
      .then((res) => {
        if (res.data[1] !== undefined && res.data[1].isLogin === true) {
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
  handleModeChange() {
    this.setState({ modeChange: true });
  }
  render() {
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
