import React from "react";
import Textbox from "../Units/Textbox/Textbox";
import "./screens.scss";

class ReadyGame extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    // const { point, name } = this.props.data;
    return (
      <div className="ready_container">
        <h1>GAME READY!</h1>
        <Textbox />
        <div className="btn_wrap">
          <a className="page_to" href="/start">
            게임 시작
          </a>
        </div>
      </div>
    );
  }
}

export default ReadyGame;
