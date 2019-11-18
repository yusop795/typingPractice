import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/typingfield">
            <button type="button">게임 시작</button>
          </Link>
        </li>
        <li>
          <Link to="/lionking">Lion King</Link>
        </li>
        <li>
          <Link to="/spiderman">Spider Man</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
