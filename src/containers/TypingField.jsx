import React from "react";
import { connect } from "react-redux";
import Textbox from "../components/textbox/Textbox";
import Ranking from "../components/ranking/Ranking";
import WordsBoard from "../components/wordsboard/WordsBoard";
import Timer from "../components/timer/Timer";
import Modal from "../components/modal/Modal";
import "./containers.scss";

/*key, q는 필수값... q=> 검색어... 랜덤은 x*/

class TypingField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      timerFunc: {},
      word: this.props.on_word
    };
  }
  componentDidMount() {
    /* 해당 컴포넌트 초기값 세팅 될 때 실행됨 => saga call (saga/index.js) INITIAL_WORDS 을 키로 실행시킬 function 을 찾는다*/
    this.props.actionReducerCall({
      type: "INITIAL_WORDS",
      action: "TEST_INIT",
      name: "on_word"
    });
    /* 유저 이름 저장함*/
    this.props.actionReducerCall({
      type: "CHANGE_STORE_VALUE",
      action: "TEST_INIT",
      name: "player_name",
      data: decodeURI(window.location.search.substr(1).split("?")[0])
    });
  }
  componentDidUpdate(prevProps) {
    // 전형적인 사용ㄴ 사례 (props 비교를 잊지 마세요)
    if (this.props.on_word !== prevProps.on_word) {
      this.setState({
        word: this.props.on_word
      });
    }
  }
  render() {
    return (
      <div>
        <div className="container">
          <h1>GAME START!</h1>
          <div className="score_timer">
            <span className="timer">
              남은 시간 <Timer set_time={120} />
            </span>
            <span className="score">현재 점수 : {this.props.game_score}</span>
          </div>
          <div className="top_container">
            {
              <ul className="board_container">
                {this.props.on_word.map((d, i) => {
                  return (
                    <li key={i} place={d.place} className="board_item">
                      <div className="item">{d.word}</div>
                    </li>
                  );
                })}
              </ul>
            }
            <Ranking rankers={this.props.data} />
          </div>
          <Textbox
            field="game"
            clearWord={words => this.setState({ word: words })}
          />
        </div>
        {this.props.game_over ? <Modal /> : ""}
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
