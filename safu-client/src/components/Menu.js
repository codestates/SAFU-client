import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

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
        <label for="selectAll">All at once</label>
      </p>
    </div>
  );
};

export default Menu;
