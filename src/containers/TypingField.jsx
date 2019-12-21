import React from "react";
import { connect } from "react-redux";
import scriptHelper from "../helpers/scriptHelper";
import Textbox from "../components/textbox/Textbox";
import Ranking from "../components/ranking/Ranking";
import WordsBoard from "../components/wordsboard/WordsBoard";
import "./containers.scss";

/*key, q는 필수값... q=> 검색어... 랜덤은 x*/

const word_api_key = "D2D790187BAC564F51CAC51931A79F88";
const API_CALL_WITH = scriptHelper(`
https://opendict.korean.go.kr/api/search?certkey_no=1161&key=${word_api_key}&target_type=search&part=word&q=나무&sort=popular&start=1&num=100&type1=word`);

class TypingField extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  /* xml */
  getWordsFrom = () => {
    console.log("getWordsFrom start");
    // const wrap = document.querySelector(wrapper);
    API_CALL_WITH.then(res => {
      console.log("success", res);
    }).catch(error => {
      console.log("api call error", error);
    });
  };
  componentDidMount() {
    this.getWordsFrom();
  }
  render() {
    // const { point, name } = this.props.data;
    return (
      <div>
        <div className="container">
          <h1>GAME START!</h1>
          <div className="top_container">
            <WordsBoard />
            <Ranking rankers={this.props.data} />
          </div>
          <Textbox />
        </div>
      </div>
    );
  }
}

/* 스토어 사용 */
const getRow = state => state;
// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
  // changeColor: color => dispatch(changeColor(color)),
  actionReducerCall: function(v) {
    return dispatch(v);
  }
});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(
  getRow,
  mapDispatchToProps
)(TypingField);
