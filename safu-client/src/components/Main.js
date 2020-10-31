import React from 'react';
import '../App.css';
import Menu from './Menu';
import CardList from './CardList';
import axios from 'axios';

const options = [
  { label: 'Code States', bootcamp_id: '3', value: 1 },
  { label: 'Fast Campus', bootcamp_id: '4', value: 2 },
  { label: 'Wecode', bootcamp_id: '5', value: 4 },
  { label: 'Vanilla Coding', bootcamp_id: '6', value: 3 },
  { label: 'Sparta Codingclub', bootcamp_id: '7', value: 5 },
  { label: 'Dream Coding', bootcamp_id: '8', value: 6 },
  { label: 'Nomad Coders', bootcamp_id: '9', value: 7 },
  { label: 'Code Lion', bootcamp_id: '10', value: 8 },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userInfo: [],
      modeChange: false,
      values: [],
      checked: true,
    };

    this.handleModeChange = this.handleModeChange.bind(this);
    this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
    this.onChange = this.onChange.bind(this);

    axios({
      method: 'post',
      url: 'http://localhost:4000/reviews',
      data: {
        bootcampList: options,
      },
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

  onChangeCheckbox = (e) => {
    const isChecked = !this.state.checked;
    const addValue = isChecked ? options : this.state.values;

    this.setState({
      checked: isChecked,
      values: addValue,
    });
    console.log('addValue', addValue);
    axios({
      method: 'post',
      url: 'http://localhost:4000/reviews',
      data: {
        bootcampList: addValue,
      },
    })
      .then((res) => {
        if (res.data[1] !== undefined && res.data[1].isLogin === true) {
          this.setState({ userInfo: res.data[0], isLogin: true });
        } else {
          this.setState({ userInfo: res.data });
        }
        console.log('axios', res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  onChange = (opt) => {
    const allOptionsSelected = opt !== null && opt.length === options.length;
    var addValue = opt;
    this.setState({
      checked: allOptionsSelected ? true : false,
      values: addValue,
    });
    addValue = addValue === null ? options : addValue;
    axios({
      method: 'post',
      url: 'http://localhost:4000/reviews',
      data: {
        bootcampList: addValue,
      },
    })
      .then((res) => {
        if (res.data[1] !== undefined && res.data[1].isLogin === true) {
          this.setState({ userInfo: res.data[0], isLogin: true });
        } else {
          this.setState({ userInfo: res.data });
        }
        console.log('axios2', res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <div>
        {/* main component */}
        <div className="main-body">
          <Menu
            onChangeCheckbox={this.onChangeCheckbox}
            onChange={this.onChange}
            checked={this.state.checked}
            values={this.state.values}
          />
          {/* {console.log('Menu state: ', this.state.values)}  잘 나옴. state 끌어올리기 잘 됨. */}
          <CardList isLogin={this.state.isLogin} userInfo={this.state.userInfo} />
        </div>
      </div>
    );
  }
}

export default App;
