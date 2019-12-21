import React from "react";
import { connect } from "react-redux";
import "./textbox.scss";

class Textbox extends React.Component {
  constructor() {
    super();
    this.state = {
      input_value: ""
    };
  }
  keyPressEnter = event => {
    if (event.key == "Enter") {
      console.log("ddd", this.props.ui_material);
      this.props.actionReducerCall({
        type: "TEST_INIT",
        name: "ui_material",
        addBy: {
          ...this.props.ui_material,
          ready: {
            title: this.state.input_value
          }
        }
      });
    }
    /*saga로 구현*/
    return this.resetTextBox();
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
    // console.log("textbox 렌더", this.props, this.state);
    // const { point, name } = this.props.data;
    console.log("textbox > ", this.props.ui_material.ready.title);
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
