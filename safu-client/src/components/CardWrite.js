//CardWrite.js - state에 따라 or 라우팅에 따라) 변경되는 부분: 이 컴폰넌트 내에선 어벗지만 Review 등록 url이냐 수정 url이냐에 따라 버튼만 제출하기/수정하기로 변경
//CardWrite.js - state에 따라 or 라우팅에 따라) 변경되는 부분: 이 컴폰넌트 내에선 어벗지만 Review 등록 url이냐 수정 url이냐에 따라 버튼만 제출하기/수정하기로 변경
import React from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

class CardWrite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      bootcampname: 'Code States',
      githublink: '',
      level: '쉬움',
      price: '10만원 이하',
      curriculum: '불만족',
      recommend: '',
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
    console.log('state : ', this.state);
  };

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            axios
              .post('http://localhost:4000/review/create', this.state)
              .then((res) => {
                this.props.history.push('/review');
              })
              .catch((err) => {
                alert('failed to create');
                console.log(err);
              });
          }}
        >
          <div className="card-write">
            <div className="title">
              <ul className="title-ul">
                <li>
                  <p>부트 캠프 선택</p>
                  <select onChange={this.handleInputValue('bootcampname')} required>
                    <option value="" disabled defaultValue>
                      부트 캠프 선택
                    </option>
                    <option value="Code States">Code States</option>
                    <option value="Fast Campus">Fast Campus</option>
                    <option value="Vanilla Coding">Vanilla Coding</option>
                  </select>
                </li>
                <li>
                  <p>Github 프로필 주소</p>
                  <input
                    type="text"
                    placeholder="github.com/아이디"
                    onChange={this.handleInputValue('githublink')}
                    required
                  />
                </li>
              </ul>
            </div>
            <div className="body">
              <ul className="body-ul">
                <li>
                  <p>난이도</p>
                  <select onChange={this.handleInputValue('level')} required>
                    <option value="" disabled defaultValue>
                      난이도 선택
                    </option>
                    <option value="쉬움">쉬움</option>
                    <option value="보통">보통</option>
                    <option value="어려움">어려움</option>
                  </select>
                </li>
                <li>
                  <p>비용</p>
                  <select onChange={this.handleInputValue('price')} required>
                    <option value="" disabled defaultValue>
                      비용 선택
                    </option>
                    <option value="10만원 이하">10만원 이하</option>
                    <option value="30만원 이하">30만원 이하</option>
                    <option value="50만원 이하">50만원 이하</option>
                    <option value="100만원 이하">100만원 이하</option>
                    <option value="100만원 이상">100만원 이상</option>
                  </select>
                </li>
                <li>
                  <p>커리큘럼</p>
                  <select onChange={this.handleInputValue('curriculum')} required>
                    <option value="" disabled defaultValue>
                      커리큘럼 만족도 선택
                    </option>
                    <option value="불만족">불만족</option>
                    <option value="보통">보통</option>
                    <option value="만족">만족</option>
                    <option value="매우만족">매우만족</option>
                  </select>
                </li>
                <li>
                  <p>추천도</p>
                  <select onChange={this.handleInputValue('recommend')} required>
                    <option value="" disabled defaultValue>
                      추천도 선택
                    </option>
                    <option value="비추천">비추천</option>
                    <option value="보통">보통</option>
                    <option value="추천">추천</option>
                    <option value="매우추천">매우추천</option>
                  </select>
                </li>
                <li>
                  <p>한마디</p>
                  <input
                    type="text"
                    placeholder="한줄평을 남겨주세요 :)"
                    onChange={this.handleInputValue('comment')}
                    required
                  />
                </li>
              </ul>
            </div>
          </div>
          <button type="submit">summit</button>
        </form>
      </div>
    );
  }
}
export default CardWrite;
