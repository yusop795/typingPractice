import React from "react";
import { connect } from "react-redux";
import "./textbox.scss";
import * as _ from "lodash";

class Textbox extends React.Component {
  constructor() {
    super();
    this.state = {
      input_value: ""
    };
  }
  keyPressEnter = event => {
    console.log("event", event.key);
    const wordArray = this.props.on_word;
    const inputWord = this.state.input_value;
    if (event.key === "Enter") {
      const isHere = _.find(wordArray, { word: inputWord });
      if (isHere) {
        console.log("ddd", isHere);
        this.props.actionReducerCall({
          type: "CLEAR_WORD",
          action: "TEST_INIT",
          name: "typingText",
          addBy: isHere
        });
        return this.resetTextBox();
      } else {
        console.log("틀림~~");
      }
    }
    /*saga로 구현*/
  };
  resetTextBox() {
    this.setState({
      input_value: ""
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
