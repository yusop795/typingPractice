import React from "react";
import { Link } from "react-router-dom";

function Body() {
  return (
    <div>
      <ul>
        <li>
          <input type="text" placeholder={"이름을 입력해 주세요."} />
        </li>
        <li>
          <Link to="/typingfield">
            <button type="button">게임 시작</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Body;
