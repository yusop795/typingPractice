import React from "react";
import "./wordsboard.scss";

class WordsBoard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <ul className="board_container">
        <li className="board_item">
          <div className="item">단어</div>
        </li>
        <li className="board_item">
          <div className="item">단어</div>
        </li>
        <li className="board_item">
          <div className="item">단어</div>
        </li>
        <li className="board_item">
          <div className="item">단어</div>
        </li>
        <li className="board_item">
          <div className="item">단어</div>
        </li>
        <li className="board_item">
          <div className="item">단어</div>
        </li>
        <li className="board_item">
          <div className="item">단어</div>
        </li>
        <li className="board_item">
          <div className="item">단어</div>
        </li>
      </ul>
    );
  }
}

export default WordsBoard;
