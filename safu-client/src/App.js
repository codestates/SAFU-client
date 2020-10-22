import React from "react";
import "./App.css";
import Nav from "./components/Nav";
// import Menu from "./components/Menu";
import CardList from "./components/CardList";

// import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true,
      userInfo: [
        {
          id: 3,
          users_id: 13,
          bootcamp_id: 5,
          githublink: "https://github.com/codestates/SAFU-server.git",
          price: "비쌈",
          level: "어려움",
          recommend: "추천",
          curriculum: "어려움",
          comment: "자기주도 학습!!!!중심이다",
          active: true,
          createdAt: "2020-10-17T13:00:04.000Z",
          updatedAt: "2020-10-17T13:00:04.000Z",
          useremail: {
            email: "thdguswn93@naver.com",
          },
          bootcampname: {
            name: "codestates",
          },
        },
        {
          id: 4,
          users_id: 15,
          bootcamp_id: 7,
          githublink: "https://sequelize.org/master/manual/eager-loading.html",
          price: "비쌈",
          level: "어려움",
          recommend: "추천",
          curriculum: "어려움",
          comment: "없음",
          active: true,
          createdAt: "2020-10-18T16:00:00.000Z",
          updatedAt: "2020-10-18T16:00:00.000Z",
          useremail: {
            email: "hun3780@gmail.com",
          },
          bootcampname: {
            name: "fastcampus",
          },
        },
        {
          id: 5,
          users_id: 13,
          bootcamp_id: 7,
          githublink: "www.naver.com",
          price: "q",
          level: "d",
          recommend: "d",
          curriculum: "d",
          comment: "d",
          active: true,
          createdAt: "2020-10-18T17:00:00.000Z",
          updatedAt: "2020-10-18T17:00:00.000Z",
          useremail: {
            email: "thdguswn93@naver.com",
          },
          bootcampname: {
            name: "fastcampus",
          },
        },
      ],
    };
  }

  handleIsLoginChange() {
    this.setState({ isLogin: true });
    // axios.get("http://localhost:4000/user").then((res) => {
    //   console.log(res.data);
    //   this.setState({ isLogin: res.data[1] });
    //   this.setState({ userInfo: res.data[0] });
    // });
  }

  render() {
    console.log("this.state:", this.state);
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
            {/* <Menu /> */}
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
            {/* {/* <Menu /> */}
            <CardList isLogin={this.state.isLogin} userInfo={this.state.userInfo} />
          </div>
        </div>
      );
    }
  }
}

export default App;
