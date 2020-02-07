import React from "react";
import { connect } from "react-redux";
import "./modal.scss";
import makeNewRank from "../../helpers/makeNewRank";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      everything_done: false
    };
  }
  gameOver() {
    makeNewRank({
      name: this.props.player_name,
      point: this.props.game_score
    });
    this.setState({
      everything_done: true
    });
  }
  render() {
    return (
      <div className="layer_popup">
        <div className="layer_bg"></div>
        <div className="modal_container">
          {this.state.everything_done ? (
            <div className="modal_body">
              <div className="mo_head">GameOver!</div>
              <a href="/ready">
                <div className="mo_body">
                  <span role="img" aria-label="clap">또 하시겠어요?🙌</span>
                </div>
              </a>
            </div>
          ) : (
            <div className="modal_body">
              <p className="mo_head">GameOver !</p>
              <p className="mo_username">{this.props.player_name}님의 점수는 {this.props.game_score}점 입니다.</p>
              <button type="button" onClick={() => this.gameOver()}>확인</button>
            </div>
          )}
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
)(Modal);
