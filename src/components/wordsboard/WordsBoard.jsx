import React from "react";
import "./wordsboard.scss";

function WordsBoard(words) {
  console.log("ddd >>>>", Array.isArray(words.voca), words.voca.length);
  return (
    <ul className="board_container">
      {words.voca.map((d, i) => {
        return (
          <li key={i} className="board_item">
            <div className="item">{d}</div>
          </li>
        );
      })}
    </ul>
  );
}

export default WordsBoard;
