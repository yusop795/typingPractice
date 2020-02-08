import React from "react";
import { connect } from "react-redux";
import Textbox from "../components/textbox/Textbox";
import "./containers.scss";

class ReadyGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0
    };
  }
  componentDidMount() {
    const winHeight = window.innerHeight;
    console.log("ddd", winHeight);
  }
  render() {
    // const { point, name } = this.props.data;
    return (
      <div className="game_ready" style={{}}>
        <div className="ready_container">
          <h1>이름을 입력해 주세요 🙌</h1>
          <Textbox onClickButton={this.savePlayerName} field="ready" />
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
