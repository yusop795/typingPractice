import React from "react";
import { connect } from "react-redux";
import Textbox from "../components/textbox/Textbox";
import "./containers.scss";

class ReadyGame extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    // const { point, name } = this.props.data;
    return (
      <div>
        <div className="ready_container">
          <h1>GAME READY!</h1>
          <Textbox />
          <div className="btn_wrap">
            <a className="page_to" href="/start">
              게임 시작
            </a>
          </div>
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
)(ReadyGame);
