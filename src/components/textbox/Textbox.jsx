import React from "react";
import { connect } from "react-redux";
import "./textbox.scss";
import * as _ from "lodash";

let score = 0;
class Textbox extends React.Component {
  constructor() {
    super();
    this.state = {
      input_value: "",
      score
    };
  }
  keyPressEnter = event => {
    const wordArray = this.props.on_word;
    const inputWord = this.state.input_value;
    if (event.key === "Enter") {
      const isHere = _.find(wordArray, { word: inputWord });
      if (isHere) {
        console.log("정답!!!", isHere);
        score = score + isHere.word.length;
        console.log('현재 스코어 : ', score);
        this.props.actionReducerCall({
          type: "CLEAR_WORD",
          action: "TEST_INIT",
          name: "typingText",
          addBy: {
            inputWord: isHere,
            prevWord: wordArray
          }
        });
        return this.resetTextBox();
      } else {
        score -= 1;
        console.log("틀림!!!");
        console.log('현재 스코어 : ', score);
        return this.resetTextBox();
      }
    }
    /*saga로 구현*/
  };
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
    // console.log(
    //   "typingText > ",
    //   this.props.typingText,
    //   "current words>>>",
    //   this.props.on_word
    // );
    return (
      <div className="textField">
        <input
          type="text"
          className="textbox"
          value={this.state.input_value}
          onChange={this.changeOnInput}
          onKeyPress={this.keyPressEnter}
        />
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
