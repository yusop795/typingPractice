import React from "react";
import { connect } from "react-redux";
import "./modal.scss";
import makeNewRank from "../../helpers/makeNewRank";
/* makeNewRank({ name: "최한솔", point: 1002 }); */

class Modal extends React.Component {
  render() {
    console.log("ddd", this.props);
    return (
      <div className="layer_popup">
        <div className="layer_bg"></div>
        <div className="modal_container">
          <div className="modal_body">
            <div className="mo_head">GameOver!</div>
            <div className="mo_body">랭킹 순위~</div>
            <div></div>
            <button></button>
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
)(Modal);
