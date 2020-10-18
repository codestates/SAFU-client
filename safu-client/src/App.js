import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import CardList from "./components/CardList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      fakedata: {
        bootcampInfo: [
          {
            name: "Code States",
            githubLink: "https://github.com/hdaleee",
            price: "높음",
            level: "보통",
            recommend: "높음",
            curriculum: "만족",
            comment: "S*FU 화이팅",
            active: "true",
            created: "20:30",
          },
        ],
      },
    };
  }

  render() {
    return (
      <div>
        {/* Nav component */}
        <Nav isLogin={this.state.isLogin} />

        {/* main component */}
        <div className="main-body">
          <Menu />
          <CardList isLogin={this.state.isLogin} fakedata={this.state.fakedata} />
        </div>
      </div>
    );
  }
}

export default App;
