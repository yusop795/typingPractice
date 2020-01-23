import React from "react";
import "./wordsboard.scss";

function WordsBoard(words) {
  /* typing field에서 받은 랜덤 단어 = words */
  return (
    <ul className="board_container">
      {words.voca.map((d, i) => {
        return (
          <li key={i} place={d.place} className="board_item">
            <div className="item">{d.word}</div>
          </li>
        );
      })}
    </ul>
  );
}

export default WordsBoard;
