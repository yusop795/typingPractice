import React from "react";
import "./App.scss";

class Body extends React.Component {
  render() {
    return (
      <div className="ready_to_container">
        <a href="/ready" className="game_ready_to">
          처음부터 시작하기
        </a>
      </div>
    );
  }
}

export default Body;
