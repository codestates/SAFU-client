import React, { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

function CardEdit(card) {
  const [bootcampname, setName] = useState(card.card.bootcampname.name);
  const [githublink, setgithublink] = useState(card.card.githublink);
  const [level, setlevel] = useState(card.card.level);
  const [price, setprice] = useState(card.card.price);
  const [curriculum, setcurriculum] = useState(card.card.curriculum);
  const [recommend, setrecommend] = useState(card.card.recommend);
  const [comment, setcomment] = useState(card.card.comment);
  const [bootcampname_before, setBootcampnameBefore] = useState(bootcampname);

  useEffect(() => {
    axios({
      method: 'post',
      url: 'http://localhost:4000//reviews/edit',
      data: {
        comment: comment,
        bootcampname: bootcampname,
        githublink: githublink,
        level: level,
        price: price,
        curriculum: curriculum,
        recommend: recommend,
        bootcampname_before: bootcampname_before,
      },
    }).then((req) => {
      console.log(req.data);
    });
  }, []);

  return (
    <div className="cardEdit-list-entry">
      <div className="cardEdit-list-div">
        <ul className="cardEdit">
          <li className="cardEdit-title">
            <p>부트 캠프 선택</p>
            <select
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            >
              <option value="" disabled>
                부트 캠프 선택
              </option>
              {bootcampname === 'Code States' ? (
                <option value="Code States" selected>
                  Code States
                </option>
              ) : (
                <option value="Code States">Code States</option>
              )}
              {bootcampname === 'Fast Campus' ? (
                <option value="Fast Campus" selected>
                  Fast Campus
                </option>
              ) : (
                <option value="Fast Campus">Fast Campus</option>
              )}
              {bootcampname === 'Vanilla Coding' ? (
                <option value="Vanilla Coding" selected>
                  Vanilla Coding
                </option>
              ) : (
                <option value="Vanilla Coding">Vanilla Coding</option>
              )}
            </select>
          </li>
          <li>
            <p>Github 프로필 주소</p>
            <input
              type="text"
              placeholder={githublink}
              required
              onChange={(e) => {
                setgithublink(e.target.value);
              }}
            />
          </li>
          <li className="level">
            <p>난이도</p>
            <select
              required
              onChange={(e) => {
                setlevel(e.target.value);
              }}
            >
              <option value="" disabled>
                난이도 선택
              </option>
              {level === '쉬움' ? (
                <option value="쉬움" selected>
                  쉬움
                </option>
              ) : (
                <option value="쉬움">쉬움</option>
              )}
              {level === '보통' ? (
                <option value="보통" selected>
                  보통
                </option>
              ) : (
                <option value="보통">보통</option>
              )}
              {level === '어려움' ? (
                <option value="어려움" selected>
                  어려움
                </option>
              ) : (
                <option value="어려움">어려움</option>
              )}
            </select>
          </li>
          <li className="price">
            <p>비용</p>
            <select
              required
              onChange={(e) => {
                setprice(e.target.value);
              }}
            >
              <option value="" disabled>
                비용 선택
              </option>
              {price === '10만원 이하' ? (
                <option value="10만원 이하" selected>
                  10만원 이하
                </option>
              ) : (
                <option value="10만원 이하">10만원 이하</option>
              )}
              {price === '30만원 이하' ? (
                <option value="30만원 이하" selected>
                  30만원 이하
                </option>
              ) : (
                <option value="30만원 이하">30만원 이하</option>
              )}
              {price === '50만원 이하' ? (
                <option value="50만원 이하" selected>
                  50만원 이하
                </option>
              ) : (
                <option value="50만원 이하">50만원 이하</option>
              )}
              {price === '100만원 이하' ? (
                <option value="100만원 이하" selected>
                  100만원 이하
                </option>
              ) : (
                <option value="100만원 이하">100만원 이하</option>
              )}
              {price === '100만원 이상' ? (
                <option value="100만원 이상" selected>
                  100만원 이상
                </option>
              ) : (
                <option value="100만원 이상">100만원 이상</option>
              )}
            </select>
          </li>
          <li className="curriculum">
            <p>커리큘럼</p>
            <select
              required
              onChange={(e) => {
                setcurriculum(e.target.value);
              }}
            >
              <option value="" disabled>
                커리큘럼 만족도 선택
              </option>
              {curriculum === '불만족' ? (
                <option value="불만족" selected>
                  불만족
                </option>
              ) : (
                <option value="불만족">불만족</option>
              )}
              {curriculum === '보통' ? (
                <option value="보통" selected>
                  보통
                </option>
              ) : (
                <option value="보통">보통</option>
              )}
              {curriculum === '만족' ? (
                <option value="만족" selected>
                  만족
                </option>
              ) : (
                <option value="만족">만족</option>
              )}
              {curriculum === '매우만족' ? (
                <option value="매우만족" selected>
                  매우만족
                </option>
              ) : (
                <option value="매우만족">매우만족</option>
              )}
            </select>
          </li>
          <li className="recommend">
            <p>추천도</p>
            <select
              required
              onChange={(e) => {
                setrecommend(e.target.value);
              }}
            >
              <option value="" disabled>
                추천도 선택
              </option>
              {recommend === '비추천' ? (
                <option value="비추천" selected>
                  비추천
                </option>
              ) : (
                <option value="비추천">비추천</option>
              )}
              {recommend === '보통' ? (
                <option value="보통" selected>
                  보통
                </option>
              ) : (
                <option value="보통">보통</option>
              )}
              {recommend === '추천' ? (
                <option value="추천" selected>
                  추천
                </option>
              ) : (
                <option value="추천">추천</option>
              )}
              {recommend === '매우추천' ? (
                <option value="매우추천" selected>
                  매우추천
                </option>
              ) : (
                <option value="매우추천">매우추천</option>
              )}
            </select>
          </li>
          <li className="comment">
            <p>한마디</p>
            <input
              type="text"
              placeholder={comment}
              required
              onChange={(e) => {
                setcomment(e.target.value);
              }}
            />
          </li>
          <li>
            <button type="submit">summit</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

// {
//   <form
//   onSubmit={(e) => {
//     e.preventDefault();
//     axios // 서버와 연결하면서 활성화
//       .post('http://localhost:4000/reviews/edit', this.state)
//       .then((res) => {
//         this.props.history.push('/review/edit');
//       })
//       .catch((err) => {
//         alert('failed to edit');
//         console.log(err);
//       });
//     }}
//   >
// }
export default CardEdit;