import React from 'react';
import '../App.css';
import { Menu, CardList } from '../pages';
import axios from 'axios';

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
    this.bootcampOptions = [];
    axios({
      method: 'get',
      url: 'https://www.safu4u.ml/bootcamplists',
    })
      .then((datas) => {
        datas.data.forEach((x) => {
          this.bootcampOptions.push({ label: x.name, bootcamp_id: x.id, value: x.id });
        });
      })
      .then(() => {
        axios({
          method: 'post',
          url: 'https://www.safu4u.ml/reviews',
          data: {
            bootcampList: this.bootcampOptions,
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
      });
  }

  handleIsLoginChange() {
    this.setState({ isLogin: true });
  }

  handleModeChange() {
    this.setState({ modeChange: true });
  }

  onChangeCheckbox = (e) => {
    const isChecked = this.state.checked ? true : !this.state.checked;
    const addValue = isChecked ? this.bootcampOptions : this.state.values;

    this.setState({
      checked: isChecked,
      values: addValue,
    });
    axios({
      method: 'post',
      url: 'https://www.safu4u.ml/reviews',
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
      })
      .catch((err) => {
        console.error(err);
      });
  };

  onChange = (opt) => {
    const allOptionsSelected = opt !== null && opt.length === this.bootcampOptions.length;
    var addValue = opt;
    this.setState({
      checked: allOptionsSelected ? true : false,
      values: addValue,
    });
    addValue = addValue === null ? this.bootcampOptions : addValue;
    axios({
      method: 'post',
      url: 'https://www.safu4u.ml/reviews',
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
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <div>
        <div className="main-body">
          <Menu
            onChangeCheckbox={this.onChangeCheckbox}
            onChange={this.onChange}
            checked={this.state.checked}
            values={this.state.values}
          />
          <CardList isLogin={this.state.isLogin} userInfo={this.state.userInfo} />
        </div>
      </div>
    );
  }
}

export default App;
