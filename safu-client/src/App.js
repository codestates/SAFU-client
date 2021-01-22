import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import axios from 'axios';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [options, setOptions] = useState([]);

  console.log('Welcom to SAFU!');

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://www.safu4u.ml/bootcamplists',
    }).then((datas) => {
      var bootcampOptions = [];
      datas.data.forEach((x) => {
        bootcampOptions.push({ label: x.name, bootcamp_id: x.id, value: x.id });
      });
      setOptions(bootcampOptions);
    });
  }, []);

  useEffect(() => {
    axios({
      method: 'post',
      url: 'https://www.safu4u.ml/reviews',
      data: {
        bootcampList: options,
      },
    })
      .then((res) => {
        if (res.data[1] !== undefined && res.data[1].isLogin === true) {
          setIsLogin(true);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  });

  return (
    <div>
      <div>
        <BrowserRouter>
          <Nav isLogin={isLogin} />
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
