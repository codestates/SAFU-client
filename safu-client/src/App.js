import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import axios from 'axios';

function App() {
  const [isLogin, setIsLogin] = useState(false);
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

  useEffect(() => {
    axios({
      method: 'post',
      url: 'http://localhost:4000/reviews',
      data: {
        bootcampList: options,
      },
    })
      .then((res) => {
        console.log(res);
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
        {/* Nav component */}
        <Nav isLogin={isLogin} />
      </div>
    </div>
  );
}
export default App;
