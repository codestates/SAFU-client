import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

import safuLogo from '../images/safu_logo.png';

axios.defaults.withCredentials = true;

const Menu = ({ onChangeCheckbox, onChange, checked, values }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:4000/bootcamplists',
    }).then((datas) => {
      var bootcampOptions = [];
      datas.data.forEach((x) => {
        bootcampOptions.push({ label: x.name, bootcamp_id: x.id, value: x.id });
      });
      setOptions(bootcampOptions);
    });
  }, []);

  return (
    <div className="menu-body">
      <div className="logo">
        <a href="/">
          <img src={safuLogo} width="120px" height="120px" />
        </a>
        <p>당신에게 가장 잘 맞는 부트캠프는 어디일까요?</p>
      </div>
      <Select
        className="bootcamp-list-slide-box"
        isMulti
        onChange={onChange}
        options={options}
        value={values}
        placeholder="보고싶은 부트캠프를 골라서 보세요!"
        styles={{
          dropdownIndicator: (provided, state) => ({
            ...provided,
            transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
          }),
          menu: (provided, state) => ({
            ...provided,
            color: state.isSelected ? 'red' : 'grey',
          }),
          multiValueLabel: (provided, state) => ({
            ...provided,
            color: state.isSelected ? 'red' : '#6b5fd0',
          }),
        }}
      />
      <p className="bootcamp-list-p">
        <input
          className="bootcamp-list-input"
          onChange={onChangeCheckbox}
          type="checkbox"
          id="selectAll"
          value="selectAll"
          checked={checked}
        />
        <div className="select-all-div">
          <label for="selectAll" className="selectAll">
            All at once
          </label>
        </div>
      </p>
    </div>
  );
};

export default Menu;
