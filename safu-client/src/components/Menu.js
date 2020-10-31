import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';

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

const Menu = ({ onChangeCheckbox, onChange, checked, values }) => (
  <div className="App">
    <Select isMulti onChange={onChange} options={options} value={values} />
    <p>
      <input
        onChange={onChangeCheckbox}
        type="checkbox"
        id="selectAll"
        value="selectAll"
        checked={checked}
      />
      <label for="selectAll">Select all</label>
    </p>
  </div>
);

export default Menu;
