import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import CardList from "./components/CardList";

import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      userInfo: [],
    };

    axios({
      method: "get",
      url: "http://localhost:4000/reviews",
    })
      .then((res) => {
        console.log(res.data);
        this.setState({ userInfo: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
    // axios({
    //   method: "get",
    //   url: "http://localhost:4000/reviews",
    // })
    //   .then((res) => {
    //     console.log("res.data:", res.data);
    //     if (res.data[1]) {
    //       this.setState({ isLogin: res.data[1] });
    //     }
    //     this.setState({ userInfo: res.data[0] });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  handleIsLoginChange() {
    this.setState({ isLogin: true });
  }

  render() {
    // console.log("this.state:", this.state);
    if (this.isLogin) {
      return (
        <div>
          {/* Nav component */}
          <Nav
            isLogin={this.state.isLogin}
            handleIsLoginChange={this.handleIsLoginChange.bind(this)}
          />

          {/* main component */}
          <div className="main-body">
            <Menu />
            <CardList isLogin={this.state.isLogin} userInfo={this.state.userInfo} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          {/* Nav component */}
          <Nav
            isLogin={this.state.isLogin}
            handleIsLoginChange={this.handleIsLoginChange.bind(this)}
          />

          {/* main component */}
          <div className="main-body">
            <Menu />
            <CardList isLogin={this.state.isLogin} userInfo={this.state.userInfo} />
          </div>
        </div>
      );
    }
  }
}

export default App;
