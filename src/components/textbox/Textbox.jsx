import React from "react";
import { connect } from "react-redux";
import "./textbox.scss";
import * as _ from "lodash";

let score = 0;
class Textbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validation: false,
      input_value: "",
      score
    };
  }
  keyPressEnterGame = event => {
    const wordArray = this.props.on_word;
    const inputWord = this.state.input_value;
    if (event.key === "Enter") {
      const isHere = _.find(wordArray, { word: inputWord });
      if (isHere) {
        score = score + isHere.word.length;
        this.props.actionReducerCall({
          type: "CLEAR_WORD",
          action: "UPDATE_BOARD",
          name: "on_word",
          addBy: {
            inputWord: isHere,
            prevWord: wordArray,
            score: score
          }
        });

        this.props.clearWord(wordArray);
        return this.resetTextBox();
      } else {
        score -= 1;
        this.props.actionReducerCall({
          type: "CHANGE_STORE_VALUE",
          action: "TEST_INIT",
          name: "game_score",
          data: score
        });
        return this.resetTextBox();
      }
    }
    /*saga로 구현*/
  };
  keyPressEnterReady = event => {
    if (event.key === "Enter") {
      if (this.state.input_value === "") {
        this.setState({
          validation: true
        });
      }
    }
  };
  linkToChange() {
    window.location.href = `/start?${this.state.input_value}`;
  }
  resetTextBox() {
    this.setState({
      input_value: "",
      score
    });
  }
  changeOnInput = e => {
    this.setState({
      input_value: e.target.value
    });
  };
  render() {
    return (
      <div className="textField">
        <input
          type="text"
          className={`textbox ${this.state.validation ? "is_require" : ""}`}
          value={this.state.input_value}
          onChange={this.changeOnInput}
          onKeyPress={
            this.props.field === "ready"
              ? this.keyPressEnterReady
              : this.keyPressEnterGame
          }
        />
        {this.props.field === "ready" && this.state.validation ? (
          <div className="error_message">
            필수값입니다.
            <br />
            이름을 입력하신 후 게임시작 버튼을 눌러 주세요.
          </div>
        ) : (
          ""
        )}
        {this.props.field === "ready" ? (
          <div className="btn_wrap">
            {this.state.input_value ? (
              <button
                type="button"
                className="page_to"
                onClick={() => this.linkToChange()}
              >
                게임 시작
              </button>
            ) : (
              <button type="button" disabled className="page_to">
                게임 시작
              </button>
            )}
          </div>
        ) : (
          ""
        )}
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
)(Textbox);
