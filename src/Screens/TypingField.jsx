import React from "react";
import Textbox from "../Units/Textbox/Textbox";
import Ranking from "../Units/Ranking/Ranking";
import WordsBoard from "../Units/WordsBoard/WordsBoard";
import "./screens.scss";

class TypingField extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    // const { point, name } = this.props.data;
    return (
      <div className="container">
        <h1>GAME START!</h1>
        <div className="top_container">
          <WordsBoard />
          <Ranking />
        </div>
        <Textbox />
      </div>
    );
  }
}

export default TypingField;
