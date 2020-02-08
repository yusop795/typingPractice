import React from "react";
import { connect } from "react-redux";
import "./timer.scss";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    /* seconds => "" 일 경우 타이머 x , 초로 숫자를 적어준다*/
    this.state = {
      time: {},
      seconds: 200
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    minutes = minutes > 0 ? minutes : 0;
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let obj = {
      h: hours,
      m: minutes,
      s: seconds
    };
    return obj;
  }
  startTimer() {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds
    });

    /* 타이머가 끝나는 시점에 게임 진행을 막아야 함 */
    if (seconds === 0) {
      clearInterval(this.timer);
      /* 타이머가 끝나면 모달 띄움 */
      this.props.actionReducerCall({
        type: "INITIAL_WORDS",
        action: "TEST_INIT",
        name: "game_over",
        data: true
      });
    }
  }
  componentDidMount() {
    if (this.state.seconds === "") return false;
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    this.startTimer();
  }

  render() {
    return (
      <div className="timer_wrap">
        {this.state.time.m}:{this.state.time.s}
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
)(Timer);
