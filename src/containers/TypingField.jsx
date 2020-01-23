import React from "react";
import { connect } from "react-redux";
import Textbox from "../components/textbox/Textbox";
import Ranking from "../components/ranking/Ranking";
import WordsBoard from "../components/wordsboard/WordsBoard";
import "./containers.scss";

/*key, q는 필수값... q=> 검색어... 랜덤은 x*/

class TypingField extends React.Component {
  constructor() {
    super();
    this.state = {
      timer: 0,
      timerFunc: {}
    };
  }
  componentDidMount() {
    /* 해당 컴포넌트 초기값 세팅 될 때 실행됨 => saga call (saga/index.js) INITIAL_WORDS 을 키로 실행시킬 function 을 찾는다*/
    this.props.actionReducerCall({
      type: "INITIAL_WORDS",
      action: "TEST_INIT",
      name: "on_word"
    });
  }
  startTimer(time) {
    console.log("start".time);
    this.setState({
      timer: time
    });
    // this.state.timerFunc = setInterval( decrementTime(), 1000);
    const timerfunc = () => {
      let timer_start = this.state.timer;
      const set = document.querySelector(".show_num");
      console.log("timer_start", timer_start);
      set.innerText = timer_start;
      if (timer_start > 0) {
        timer_start--;
        this.setState({
          timer: timer_start
        });
      } else {
        clearInterval(timer_starting);
      }
    };

    const timer_starting = setInterval(timerfunc(), 1000);
  }
  decrementTime() {}
  render() {
    // console.log("rendom words ", this.props.on_word);
    // const { point, name } = this.props.data;
    return (
      <div>
        <div className="container">
          <h1>GAME START!</h1>
          <div className="score_timer">
            <span className="timer">
              남은 시간{" "}
              <span className="show_num">{() => this.startTimer(30)}</span>s
            </span>
            <span className="score">현재 점수 : 10</span>
          </div>
          <div className="top_container">
            <WordsBoard voca={this.props.on_word} />
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
