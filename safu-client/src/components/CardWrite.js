//CardWrite.js - state에 따라 or 라우팅에 따라) 변경되는 부분: 이 컴폰넌트 내에선 어벗지만 Review 등록 url이냐 수정 url이냐에 따라 버튼만 제출하기/수정하기로 변경
import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

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
      recommend: '비추천',
      bootcamplist: [],
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    axios({
      method: 'get',
      url: 'https://www.safu4u.ml/bootcamplists',
    })
      .then((datas) => {
        const map1 = datas.data.map((x) => x.name);
        this.setState({ bootcamplist: map1 });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  render() {
    return (
      <div className="card-write-div">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            axios
              .post('https://www.safu4u.ml/reviews/create', this.state)
              .then((res) => {
                this.props.history.push('/');
              })
              .catch((err) => {
                alert(
                  '해당 부트캠프에 대한 리뷰는 이미 작성했습니다. my page 에서 리뷰를 수정할 수 있습니다.',
                );
                console.log(err);
              });
          }}
        >
          <div className="card-write">
            <ul>
              <li>
                <p>부트 캠프 선택</p>
                <select onChange={this.handleInputValue('bootcampname')} required>
                  <option value="" disabled defaultValue>
                    부트 캠프 선택
                  </option>
                  {this.state.bootcamplist.map((bootcamp) => (
                    <option value={bootcamp}>{bootcamp}</option>
                  ))}
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
              <li>
                <button type="submit">summit</button>
              </li>
            </ul>
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(CardWrite);
